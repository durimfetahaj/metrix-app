"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FC } from "react";

interface AlertDialog {
  title: string;
  description: string;
  actionText: string;
  children?: React.ReactNode;
  isDelete?: boolean;
  onSubmit: (id?: string) => void;
}

const Modal: FC<AlertDialog> = ({
  title,
  description,
  isDelete = false,
  children,
  actionText,
  onSubmit,
}) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      {children}
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          className={isDelete ? "bg-red-500 hover:bg-red-400" : ""}
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {actionText}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default Modal;
