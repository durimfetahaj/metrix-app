"use client";

import { DataTable } from "@/components/DataTable";
import { Customer } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { columns } from "./columns";
import PageHead from "@/components/PageHead";
import { Icons } from "@/components/Icons";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Formik, FormikValues } from "formik";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { customer } from "@/utils/validators";
import useCustomers from "@/store/useCustomers";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import useOrders from "@/store/useOrders";
import { CustomersCards } from "@/components/Cards";
import { BarChartComponent } from "@/components/BarChart";

const CustomersPage: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { add, get: getCustomers, customers, loading } = useCustomers();
  const { get: getOrders, orders } = useOrders();

  useEffect(() => {
    getCustomers();
    getOrders();
  }, []);

  const handleSubmit = async (values: FormikValues, formik: any) => {
    try {
      add(values);
      setDialogOpen(false);
      formik.resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <Loader variant="form" />;
  }

  return (
    <div className="max-w-7xl">
      <div className="flex flex-col gap-5">
        <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <PageHead text="Customers Summary">
            <AlertDialogTrigger asChild>
              <Button>
                <Icons.plus /> Add a New Customer
              </Button>
            </AlertDialogTrigger>
          </PageHead>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              createdAt: new Date(),
              orders: [],
              status: "Active",
            }}
            validationSchema={customer}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, submitForm }) => (
              <form onSubmit={handleSubmit} className="max-w-full ">
                <Modal
                  title="Add New Customer"
                  description="Customer Information"
                  actionText="Add"
                  onSubmit={submitForm} // Pass Formik's submitForm function
                >
                  <div className="flex flex-col ">
                    <Input name="name" placeholder="Customer Name" />
                    <Input name="email" placeholder="Customer E-mail" />
                    <Input name="phone" placeholder="Customer Phone" />
                  </div>
                </Modal>
              </form>
            )}
          </Formik>
        </AlertDialog>
        <CustomersCards
          customers={customers as Customer[]}
          orders={
            orders?.filter((order) => order?.status === "Delivered").length
          }
        />
        <DataTable
          columns={columns}
          data={customers}
          options={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          placeholder="Search for products..."
        />
      </div>
    </div>
  );
};

export default CustomersPage;
