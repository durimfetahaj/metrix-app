import { OrderItem } from "@/types/types";
import {
  getStatusClassName,
  timestampToDate,
  truncateString,
} from "@/utils/functions";
import { Badge } from "./ui/badge";

type Props = {
  item: OrderItem;
  orderDate: { seconds: number; nanoseconds: number };
};

function ItemDetails({ item, orderDate }: Props) {
  return (
    <div className="flex flex-col w-full gap-2 text-xs md:text-base">
      <div className="flex justify-between text-xs md:text-base">
        {truncateString(item?.name)}
        <p className="text-brand-black-20 whitespace-nowrap">
          {timestampToDate(orderDate)}
        </p>
      </div>
      <div className="flex justify-between">
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format(item.price)}{" "}
          x {item?.quantity}
        </p>
        <Badge className={getStatusClassName(item?.status)}>
          {item.status}
        </Badge>
      </div>
    </div>
  );
}

export default ItemDetails;
