import React from "react";
import { Icons } from "./Icons";

type Props = {
  variant?: "page" | "form";
};

function Loader({ variant = "page" }: Props) {
  if (variant === "form") {
    return (
      <div className="h-full w-full items-center justify-center flex">
        <Icons.spinner />
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Icons.spinner />
    </div>
  );
}

export default Loader;
