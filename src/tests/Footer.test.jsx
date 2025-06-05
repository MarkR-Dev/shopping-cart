import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("Matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("Renders lists", () => {
    render(<Footer />);

    const lists = screen.getAllByRole("list");

    expect(lists.length).toBe(4);
  });
});
