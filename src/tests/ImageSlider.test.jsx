import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageSlider from "../components/ImageSlider";

const testImages = [
  {
    imageUrl: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    alt: "Mens Cotton Jacket",
  },
  {
    imageUrl: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    alt: "Mens Casual Slim Fit",
  },
  {
    imageUrl:
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    alt: "White Gold Plated Princess",
  },
];

// These tests should ideally be split into smaller tests
describe("Image Slider", () => {
  it("Renders image slider", () => {
    render(<ImageSlider imageData={testImages} />);
    const image = screen.getByRole("img", { name: /mens cotton jacket/i });
    expect(image).toBeInTheDocument();
  });

  it("Clicking next button moves images forward in slider", async () => {
    const user = userEvent.setup();
    render(<ImageSlider imageData={testImages} />);

    const midImgBefore = screen.getByTestId("mid-img");
    const jacket = screen.getByRole("img", { name: /mens cotton jacket/i });
    const firstDotBefore = screen.getAllByTestId("dot")[0];

    expect(firstDotBefore).toHaveClass(/active/i);
    expect(midImgBefore).toEqual(jacket);

    const nextBtn = screen.getByRole("button", { name: /next/i });
    await user.click(nextBtn);

    const midImgAfter = screen.getByTestId("mid-img");
    const slim = screen.getByRole("img", { name: /mens casual slim fit/i });
    const firstDotAfter = screen.getAllByTestId("dot")[0];
    const secondDot = screen.getAllByTestId("dot")[1];

    expect(midImgAfter).toEqual(slim);
    expect(firstDotAfter).not.toHaveClass(/active/i);
    expect(secondDot).toHaveClass(/active/i);
  });

  it("Clicking prev button moves images backward in slider", async () => {
    const user = userEvent.setup();
    render(<ImageSlider imageData={testImages} />);

    const midImgBefore = screen.getByTestId("mid-img");
    const jacket = screen.getByRole("img", { name: /mens cotton jacket/i });
    const firstDotBefore = screen.getAllByTestId("dot")[0];

    expect(firstDotBefore).toHaveClass(/active/i);
    expect(midImgBefore).toEqual(jacket);

    const prevBtn = screen.getByRole("button", { name: /previous/i });
    await user.click(prevBtn);

    const midImgAfter = screen.getByTestId("mid-img");
    const princess = screen.getByRole("img", {
      name: /white gold plated princess/i,
    });
    const firstDotAfter = screen.getAllByTestId("dot")[0];
    const thirdDot = screen.getAllByTestId("dot")[2];

    expect(midImgAfter).toEqual(princess);
    expect(firstDotAfter).not.toHaveClass(/active/i);
    expect(thirdDot).toHaveClass(/active/i);
  });

  it("Clicking a specific dot moves image slider to correct image", async () => {
    const user = userEvent.setup();
    render(<ImageSlider imageData={testImages} />);

    const midImgBefore = screen.getByTestId("mid-img");
    const jacket = screen.getByRole("img", { name: /mens cotton jacket/i });
    const firstDotBefore = screen.getAllByTestId("dot")[0];
    const secondDotBefore = screen.getAllByTestId("dot")[1];

    expect(firstDotBefore).toHaveClass(/active/i);
    expect(secondDotBefore).not.toHaveClass(/active/i);
    expect(midImgBefore).toEqual(jacket);

    await user.click(secondDotBefore);

    const midImgAfter = screen.getByTestId("mid-img");
    const slim = screen.getByRole("img", { name: /mens casual slim fit/i });
    const firstDotAfter = screen.getAllByTestId("dot")[0];
    const secondDotAfter = screen.getAllByTestId("dot")[1];

    expect(midImgAfter).toEqual(slim);
    expect(firstDotAfter).not.toHaveClass(/active/i);
    expect(secondDotAfter).toHaveClass(/active/i);
  });
});
