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
    <div className="flex flex-col w-full gap-2 ">
      <div className="flex justify-between">
        {truncateString(item?.name)}
        <p className="text-brand-black-20">{timestampToDate(orderDate)}</p>
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
