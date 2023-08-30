import { Order, Product } from "@/types/types";
import SummaryCard from "./SummaryCard";
import moment from "moment";
import { DisplayImage } from "./DisplayImage";
import { getStatusClassName } from "@/utils/functions";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";

type Props = {
  product: Product;
  orders: Order[];
};

export function ProductCards({ product, orders }: Props) {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row">
        <DisplayImage
          src={product?.images[0]}
          alt={product?.name}
          className="w-full md:w-1/6"
        />
        <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-3">
          <SummaryCard
            data={[
              {
                title: "Last Order",
                value: moment(
                  product?.lastSoldTimestamp?.toDate().toLocaleDateString()
                ).format("D MMM YYYY"),
              },
              { title: "Price", value: product?.sellingPrice + "€" },
              { title: "In-Stock", value: product?.stock },
            ]}
            icon={
              <div>
                <Badge className={getStatusClassName(product?.status)}>
                  {product?.status}
                </Badge>
              </div>
            }
          />
          <SummaryCard
            data={[
              {
                title: "Total Orders",
                value: product?.salesCount * product?.sellingPrice + "€",
              },
            ]}
            icon={<Icons.inventory.orders />}
          />
          <SummaryCard
            data={[
              {
                title: "Views",
                value: 500,
              },
              { title: "Favourite", value: 20 },
            ]}
            icon={<Icons.inventory.views />}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SummaryCard
          data={[
            {
              title: "All Orders",
              value: orders?.length,
            },
            {
              title: "Pending",
              value: orders?.filter((order) => order.status === "Pending")
                .length,
            },
            {
              title: "Completed",
              value: orders?.filter((order) => order.status === "Delivered")
                .length,
            },
          ]}
          icon={<Icons.global.bag />}
        />
        <SummaryCard
          data={[
            {
              title: "Canceled",
              value: orders?.filter((order) => order.status === "Cancelled")
                .length,
            },
            {
              title: "Returned",
              value: orders?.filter((order) => order.status === "Returned")
                .length,
            },
          ]}
          icon={<Icons.global.bag />}
        />
      </div>
    </>
  );
}
