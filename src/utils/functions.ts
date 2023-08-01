import { DocumentData } from "firebase/firestore";

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
    const expiryDate = product.expiryDate?.toDate() || null;
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
