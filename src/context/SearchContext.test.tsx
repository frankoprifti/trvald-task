import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchProvider, useSearch } from "@/context/SearchContext";

const TestComponent: React.FC = () => {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <div>
      <p data-testid="search-value">{searchValue}</p>
      <button onClick={() => setSearchValue("New Value")}>Set Value</button>
    </div>
  );
};

describe("SearchContext", () => {
  it("provides initial values correctly", () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    expect(screen.getByTestId("search-value")).toHaveTextContent("");
  });

  it("updates searchValue when setSearchValue is called", () => {
    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>
    );

    act(() => {
      screen.getByText("Set Value").click();
    });

    expect(screen.getByTestId("search-value")).toHaveTextContent("new value");
  });

  it("throws an error when useSearch is used outside of SearchProvider", () => {
    const TestComponentOutsideProvider: React.FC = () => {
      useSearch();
      return null;
    };

    expect(() => render(<TestComponentOutsideProvider />)).toThrow(
      "useSearch must be used within a SearchProvider"
    );
  });
});
