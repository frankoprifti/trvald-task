"use client";
import AirtableLogo from "@/assets/Airtable-Logo.png";
import { useSearch } from "@/context/SearchContext";
import { SearchIcon } from "@/icons/SearchIcon";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <Navbar>
      <NavbarBrand>
        <Image src={AirtableLogo} width={200} height={70} alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            size="sm"
            startContent={<SearchIcon size={18} width={18} height={18} />}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
