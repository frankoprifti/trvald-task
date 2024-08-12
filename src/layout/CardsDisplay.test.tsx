import React from "react";
import { render } from "@testing-library/react";
import { SearchProvider } from "@/context/SearchContext";
import CardsDisplay from "./CardsDisplay";

const mockData = [
  {
    title: "First Item",
    shortDescription: "This is the first item",
    image: "http://example.com/img.png",
  },
  {
    title: "Second Item",
    shortDescription: "This is the second item",
    image: "http://example.com/img.png",
  },
  {
    title: "Third Item",
    shortDescription: "This is the third item",
    image: "http://example.com/img.png",
  },
];

describe("CardsDisplay", () => {
  it("renders all cards when no search is applied", () => {
    const screen = render(
      <SearchProvider>
        <CardsDisplay data={mockData} />
      </SearchProvider>
    );

    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.shortDescription)).toBeInTheDocument();
    });
  });
});
