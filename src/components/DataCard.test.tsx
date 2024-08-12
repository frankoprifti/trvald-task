import { DataCard, DataCardProps } from "@/components/DataCard";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("DataCard", () => {
  const mockData: DataCardProps = {
    title: "Test Title",
    shortDescription: "This is a test description.",
    image: "http://example.com/test-image.jpg",
  };

  it("renders with correct title, description, and image", () => {
    const { getByText, getByAltText } = render(<DataCard {...mockData} />);

    expect(getByText(mockData.title)).toBeInTheDocument();
    expect(getByText(mockData.shortDescription)).toBeInTheDocument();

    const image = getByAltText("Card background") as HTMLImageElement;
    expect(image).toHaveAttribute("src", mockData.image);
    expect(image).toHaveAttribute("width", "270");
    expect(image).toHaveAttribute("height", "150");
  });
});
