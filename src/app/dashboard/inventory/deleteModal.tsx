import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useProducts from "@/store/useProducts";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  product: any;
};

const DeleteModal = ({ product }: Props) => {
  const { deleteProduct } = useProducts();
  const { toast } = useToast();
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete this
          product
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          className="bg-red-500 hover:bg-red-400"
          onClick={() => {
            deleteProduct(product?.id);
            toast({
              title: "Product deleted.",
              description: `${product?.name} has been deleted from inventory`,
              variant: "success",
            });
          }}
        >
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteModal;
