import { Order } from "@/types/types";
import { DocumentData, Timestamp } from "firebase/firestore";
import moment from "moment";

export function getTitle(pathName: string) {
  let trimmedWord;

  if (pathName === "/dashboard") {
    trimmedWord = pathName.split("/")[1];
  } else if (pathName.startsWith("/dashboard/")) {
    trimmedWord = pathName.split("/")[2];
  }

  if (trimmedWord) {
    trimmedWord = trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1);
  }

  return trimmedWord;
}

export const getLowStockProducts = (products: DocumentData[] | null) => {
  const threshold = 10; // Define your low stock threshold

  if (!products) {
    return [];
  }

  const lowStockProducts = products.filter((product) => {
    const stockQuantity = product.stock || 0;
    return stockQuantity <= threshold;
  });

  return lowStockProducts;
};

export const getExpiredProducts = (products: DocumentData[] | null) => {
  if (!products) {
    return [];
  }

  const currentDate = new Date();

  const expiredProducts = products.filter((product) => {
    const expiryDate = product.hasExpiryDate
      ? product?.expiryDate.toDate()
      : null;
    return expiryDate && expiryDate < currentDate;
  });

  return expiredProducts;
};

export const getActiveProducts = (products: any[]) => {
  const today = new Date();
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const activeProducts = products.filter((product) => {
    const lastTimeSold = product?.lastSoldTimestamp
      ? new Timestamp(
          product?.lastSoldTimestamp?.seconds,
          product?.lastSoldTimestamp?.nanoseconds
        ).toDate()
      : "N/A";

    return new Date(lastTimeSold) >= thirtyDaysAgo;
  });

  return activeProducts;
};

export function truncateString(url: string): string {
  const maxLength = 50;
  const truncatedUrl =
    url && url.length > maxLength
      ? url.substring(0, maxLength - 3) + "..."
      : url;

  return truncatedUrl;
}

export function timestampToDate(date: any) {
  const createdAtTimestamp = new Timestamp(date?.seconds, date?.nanoseconds);
  return moment(createdAtTimestamp.toDate().toLocaleDateString()).format(
    "D MMM YYYY"
  );
}

export function getStatusClassName(status: String) {
  if (status === "Completed") {
    return "bg-brand-success hover:bg-brand-success text-white text-xs md:text-md";
  } else if (
    status === "Canceled" ||
    status === "Returned" ||
    status === "Inactive"
  ) {
    return "bg-brand-error hover:bg-brand-error text-xs md:text-md";
  } else if (status === "Published" || status === "Active") {
    return "bg-brand-success hover:bg-brand-success text-xs md:text-md";
  } else {
    return "bg-brand-secondary-30 hover:bg-brand-secondary-30 text-brand-black-50 text-xs md:text-md";
  }
}

export function isNewUser(data: any[]) {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  const newCustomers = data.filter((data) => {
    const createdAtTimestamp = new Timestamp(
      data?.createdAt?.seconds,
      data?.createdAt?.nanoseconds
    ).toDate();
    return (
      createdAtTimestamp >= thirtyDaysAgo && createdAtTimestamp <= currentDate
    );
  });

  return newCustomers.length;
}

export function aggregateSalesData(orders: any[]) {
  const monthlySalesData = [
    { name: "Jan", pv: 0 },
    { name: "Feb", pv: 0 },
    { name: "Mar", pv: 0 },
    { name: "Apr", pv: 0 },
    { name: "May", pv: 0 },
    { name: "Jun", pv: 0 },
  ];

  orders.forEach((order) => {
    const orderDate = new Timestamp(
      order?.createdAt?.seconds,
      order?.createdAt?.nanoseconds
    ).toDate();

    const monthIndex = orderDate.getMonth();

    if (monthIndex <= 5) {
      monthlySalesData[monthIndex].pv += order.totalPrice;
    }
  });

  return monthlySalesData;
}

export function GetRecentOrders(orders: Order[]) {
  const currentDate = new Date();
  const twentyFourHoursAgo = new Date();
  twentyFourHoursAgo.setHours(currentDate.getHours() - 24);

  const recentOrders = orders.filter((order) => {
    const createdAtTimestamp = new Timestamp(
      order?.createdAt?.seconds,
      order?.createdAt?.nanoseconds
    ).toDate();
    return (
      createdAtTimestamp >= twentyFourHoursAgo &&
      createdAtTimestamp <= currentDate
    );
  });

  console.log("recentOrders", recentOrders);

  return recentOrders;
}
