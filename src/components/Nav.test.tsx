import { useSearch } from "@/context/SearchContext";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Nav from "./Nav";

jest.mock("@/context/SearchContext", () => ({
  useSearch: jest.fn(),
}));

describe("Nav Component", () => {
  const mockSetSearchValue = jest.fn();

  beforeEach(() => {
    (useSearch as jest.Mock).mockReturnValue({
      searchValue: "",
      setSearchValue: mockSetSearchValue,
    });
  });

  it("renders the logo", () => {
    render(<Nav />);

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/assets/Airtable-Logo.png");
  });

  it("updates search value on input change", () => {
    (useSearch as jest.Mock).mockReturnValue({
      searchValue: "",
      setSearchValue: mockSetSearchValue,
    });

    render(<Nav />);

    const input = screen.getByPlaceholderText("Type to search...");
    fireEvent.change(input, { target: { value: "Test search" } });

    expect(mockSetSearchValue).toHaveBeenCalledWith("Test search");
  });
});
