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

export function timestampToDate(date: Timestamp) {
  return moment(date.toDate().toLocaleDateString()).format("D MMM YYYY");
}

export function getStatusClassName(status: String) {
  if (status === "Completed") {
    return "bg-brand-success hover:bg-brand-success text-brand-black-50";
  } else if (status === "Canceled" || status === "Returned") {
    return "bg-brand-error hover:bg-brand-error text-white";
  } else if (status === "Published") {
    return "bg-brand-primary-100 hover:bg-brand-primary-90";
  } else {
    return "bg-brand-secondary-80 hover:bg-brand-secondary-70 text-brand-black-50";
  }
}
