import React from "react";
import PageHead from "./PageHead";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./Icons";

type Props = {};

function Intentory({}: Props) {
  return (
    <div>
      <PageHead text="Inventory">
        <Link href="/dashboard/inventory/new">
          <Button>
            <Icons.plus /> Add a New Product
          </Button>
        </Link>
      </PageHead>
    </div>
  );
}

export default Intentory;
