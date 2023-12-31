import { db } from "@/firebase/firebaseConfig";
import { Order, orderItemStatusOptions } from "@/types/types";
import { doc, getDoc } from "firebase/firestore";
import ItemInfoSummary from "@/components/ItemInfoSummary";
import { timestampToDate } from "@/utils/functions";
import { DataTable } from "@/components/DataTable";
import { columns, mobileColumns } from "./columns";
import { OrderCards } from "@/components/Cards";
import MobileTableCard from "@/components/MobileTableCard";

async function getData(orderId: string): Promise<Order | null> {
  const orderDocRef = doc(db, "orders", orderId);
  const orderDocSnapshot = await getDoc(orderDocRef);

  if (!orderDocSnapshot.exists()) {
    return null;
  }

  const orderData = orderDocSnapshot.data() as Order;
  return {
    ...orderData,
    createdAt: {
      seconds: orderData.createdAt.seconds,
      nanoseconds: orderData.createdAt.nanoseconds,
    },
  };
}

type Props = {
  params: { orderId: string };
};

const page = async ({ params }: Props) => {
  const order = await getData(params?.orderId);

  if (!order) {
    return <p>No order found</p>;
  }

  return (
    <div className="flex flex-col gap-5 ">
      <ItemInfoSummary
        firstItem={{ title: "Order Number", value: order?.orderNumber }}
        secondItem={{
          title: "Order Date",
          value: timestampToDate(order?.createdAt),
        }}
      >
        <p>
          Tracking Id {""}
          <span className="text-brand-black-30">{order?.trackingId}</span>
        </p>
      </ItemInfoSummary>
      <OrderCards order={order} />
      <div className="sm:hidden h-screen">
        <p>Products List</p>
        <MobileTableCard data={order?.items} columns={mobileColumns} />
      </div>
      <DataTable
        columns={columns}
        data={order.items}
        options={orderItemStatusOptions.map((status) => ({
          value: status,
          label: status,
        }))}
        placeholder="Search for items..."
      />
    </div>
  );
};

export default page;
