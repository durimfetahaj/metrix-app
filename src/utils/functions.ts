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
      ? product.lastSoldTimestamp.toDate()
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
    return "bg-brand-success hover:bg-brand-success text-white";
  } else if (
    status === "Canceled" ||
    status === "Returned" ||
    status === "Inactive"
  ) {
    return "bg-brand-error hover:bg-brand-error";
  } else if (status === "Published" || status === "Active") {
    return "bg-brand-success hover:bg-brand-success";
  } else {
    return "bg-brand-secondary-30 hover:bg-brand-secondary-30 text-brand-black-50";
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
