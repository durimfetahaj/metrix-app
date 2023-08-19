import useProducts from "@/store/useProducts";
import { toast } from "@/components/ui/use-toast";
import Modal from "@/components/Modal";

type Props = {
  productId: string;
  productName: string;
};

const DeleteModal = ({ productId, productName }: Props) => {
  const { remove } = useProducts();

  const handleDelete = () => {
    remove(productId);
    toast({
      title: "Product deleted.",
      description: `product ${productName}  has been deleted`,
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
};

export default DeleteModal;
