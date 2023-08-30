"use client";

import React from "react";
import Link from "next/link";

interface Column<T> {
  header: string;
  accessor: keyof T | ((data: T) => React.ReactNode);
  render?: (value: any) => React.ReactNode;
}

interface MobileOrderCardProps<T> {
  data: T[];
  columns: Column<T>[];
  href?: string;
}

const MobileTableCard = <T extends Record<string, any>>({
  data,
  href,
  columns,
}: MobileOrderCardProps<T>) => {
  return (
    <div className="bg-white p-4 rounded-md ">
      {data?.length > 0 ? (
        data.map((item, index) => (
          <Link href={href ? `/dashboard/${href}/${item?.id}` : ""} key={index}>
            {columns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <strong>{column.header}:</strong>{" "}
                {typeof column.accessor === "function"
                  ? column.accessor(item)
                  : column.render
                  ? column.render(item[column.accessor as keyof T])
                  : item[column.accessor as keyof T]}
              </div>
            ))}
            <hr className="my-4" />
          </Link>
        ))
      ) : (
        <p className="text-center">No orders</p>
      )}
    </div>
  );
};

export default MobileTableCard;
