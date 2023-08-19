import React from "react";
import useCustomers from "@/store/useCustomers";
import Modal from "@/components/Modal";
import { toast } from "@/components/ui/use-toast";

function DeleteModal({
  customerId,
  customerName,
}: {
  customerId: string;
  customerName: string;
}) {
  const { remove } = useCustomers();

  const handleDelete = () => {
    remove(customerId);
    toast({
      title: "Customer deleted.",
      description: `customer ${customerName}  has been deleted`,
      variant: "success",
    });
  };

  return (
    <Modal
      title="Are you absolutely sure?"
      description="This action cannot be undone. This will permanently delete this customer"
      actionText="Delete"
      isDelete
      onSubmit={handleDelete}
    />
  );
}

export default DeleteModal;
