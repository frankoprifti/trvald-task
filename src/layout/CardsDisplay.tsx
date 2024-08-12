"use client";
import { DataCard, DataCardProps } from "@/components/DataCard";
import { useSearch } from "@/context/SearchContext";
import React from "react";

export default function CardsDisplay({ data }: { data: DataCardProps[] }) {
  const { searchValue } = useSearch();
  return (
    <div className="flex row h-full gap-4 p-4 flex-wrap max-w-[1024px] mx-auto">
      {data
        .filter(
          (item) =>
            item.title?.toLowerCase()?.includes(searchValue) ||
            item.shortDescription?.toLowerCase()?.includes(searchValue)
        )
        ?.map((item, i) => (
          <DataCard
            key={i}
            title={item.title}
            shortDescription={item.shortDescription}
            image={item.image}
          />
        ))}
    </div>
  );
}
