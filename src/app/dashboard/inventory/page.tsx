import { Icons } from "@/components/Icons";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";
import React from "react";

const page: FC = () => {
  return (
    <PageHead text="Inventory">
      <Link href="/dashboard/inventory/new">
        <Button>
          <Icons.plus /> Add a New Product
        </Button>
      </Link>
    </PageHead>
  );
};

export default page;
