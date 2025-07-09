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

  it("Clicking view product navigates to /products/:id", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const viewProductBtn = await screen.findAllByRole("link", {
      name: /view product/i,
    });

    await user.click(viewProductBtn[0]);

    const heading = screen.getByRole("heading", {
      name: /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i,
    });
    const img = screen.getByAltText(
      /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
    );

    expect(heading).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
