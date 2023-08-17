import { db } from "@/firebase/firebaseConfig";
import { Customer, orderItemStatusOptions } from "@/types/types";
import { doc, getDoc } from "firebase/firestore";
import ItemInfoSummary from "@/components/ItemInfoSummary";
import { timestampToDate } from "@/utils/functions";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";
import { CustomerCards } from "@/components/Cards";

async function getData(customerId: string): Promise<Customer | null> {
  const orderDocRef = doc(db, "customers", customerId);
  const orderDocSnapshot = await getDoc(orderDocRef);

  if (!orderDocSnapshot.exists()) {
    return null;
  }

  const customerData = orderDocSnapshot.data() as Customer;
  return {
    ...customerData,
    createdAt: {
      seconds: customerData.createdAt.seconds,
      nanoseconds: customerData.createdAt.nanoseconds,
    },
  };
}

type Props = {
  params: { customerId: string };
};

const page = async ({ params }: Props) => {
  const customer = await getData(params?.customerId);

  if (!customer) {
    return <p>No customer found</p>;
  }

  return (
    <div className="max-w-7xl">
      <div className="flex flex-col gap-5">
        <ItemInfoSummary
          firstItem={{
            title: "Order Number",
            value: customer?.orders.find(
              (order) => order?.status === "Processing"
            )?.id,
          }}
          secondItem={{
            title: "Customer Since 12 Sept 2022 - 12:55 pm",
            value: timestampToDate(customer?.createdAt),
          }}
        >
          <p>
            Tracking Id {""}
            <span className="text-brand-black-30">
              {
                customer?.orders.find((order) => order?.status === "Processing")
                  ?.trackingId
              }
            </span>
          </p>
        </ItemInfoSummary>
        <CustomerCards customer={customer} order={customer?.orders[0]} />
        <DataTable
          columns={columns}
          data={customer?.orders as any}
          options={orderItemStatusOptions.map((status) => ({
            value: status,
            label: status,
          }))}
          placeholder="Search for items..."
        />
      </div>
    </div>
  );
};

export default page;
