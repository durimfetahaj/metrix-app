"use client";

import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-center space-x-2 m-4">
      <input
        placeholder="Filter products..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="h-8 w-[150px] lg:w-[250px] border rounded-md p-4"
      />
      {table.getColumn("status") && (
        <DataTableFacetedFilter
          column={table.getColumn("status")}
          title="Status"
          options={[
            {
              value: "published",
              label: "Published",
            },
            {
              value: "unpublished",
              label: "Unpublished",
            },
          ]}
        />
      )}
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3 flex gap-2"
        >
          Reset
          <Icons.CrossIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
