import "@testing-library/jest-dom";

// jest.setup.js

// Mock the next/image component globally
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  ),
}));

jest.mock("@/assets/Airtable-Logo.png", () => "/assets/Airtable-Logo.png");
