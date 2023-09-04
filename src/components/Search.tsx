"use client";

import React, { ChangeEvent, useState } from "react";
import { Icons } from "./Icons";

type Props = {};

function Search({}: Props) {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchValue(value);
    }
  };

  return (
    <div className="relative hidden md:block">
      <input
        placeholder="Search..."
        onChange={searchHandler}
        className="h-8 w-[150px] md:w-[350px] lg:w-[550px] border rounded-md p-4"
        onKeyDown={handleKeyDown}
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Icons.search />
      </div>
    </div>
  );
}

export default Search;
