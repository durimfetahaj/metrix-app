import React from "react";
import { Icons } from "./Icons";

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Icons.spinner />
    </div>
  );
}

export default Loader;
