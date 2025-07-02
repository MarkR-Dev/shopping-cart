import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createMemoryRouter,
  RouterProvider,
  MemoryRouter,
} from "react-router-dom";
import routes from "../routes/routes";
import ProductCard from "../components/ProductCard";

describe("Product Card Component", () => {
  it("Renders a product card with provided info", () => {
    const product = {
      image:
        "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C90184s.jpg?im=Resize,width=750",
      title: "test",
      id: 1,
      price: 60,
    };
    const addToCart = vi.fn();

    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={addToCart} />
      </MemoryRouter>
    );

    const altText = screen.getByAltText("test");
    const title = screen.getByRole("heading", { name: /test/i });
    const price = screen.getByRole("heading", { name: /60.00/i });

    expect(altText).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it("Clicking add to cart calls the addToCart callback function", async () => {
    const product = {
      image:
        "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C90184s.jpg?im=Resize,width=750",
      title: "test",
      id: 1,
      price: 60,
    };
    const addToCart = vi.fn();

    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ProductCard product={product} addToCart={addToCart} />
      </MemoryRouter>
    );

    const addToCartBtn = screen.getByRole("button", { name: /add to cart/i });

    await user.click(addToCartBtn);

    expect(addToCart).toHaveBeenCalled();
  });

  // todo once next page is setup
  it.todo("Clicking view product navigates to /products/:id");
});
