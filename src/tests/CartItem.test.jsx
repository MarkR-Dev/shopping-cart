import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "../routes/routes";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/CartItem";

describe("Cart item component", () => {
  it("Renders a cart item", () => {
    const product = {
      image:
        "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C90184s.jpg?im=Resize,width=750",
      title: "test",
      id: 1,
      price: 60,
    };

    const updateCart = vi.fn();
    const removeFromCart = vi.fn();

    render(
      <MemoryRouter>
        <CartItem
          product={product}
          productQuantity={2}
          updateCart={updateCart}
          removeFromCart={removeFromCart}
        />
      </MemoryRouter>
    );

    const img = screen.getByAltText("test");
    const title = screen.getByRole("heading", { name: /test x2/i });
    const price = screen.getByRole("heading", { name: /£120.00/i });
    const removeBtn = screen.getByRole("button", { name: /remove/i });
    const viewProductLink = screen.getByRole("link", { name: /view product/i });

    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
    expect(viewProductLink).toBeInTheDocument();
  });

  it("Renders correct price information for quantity selected", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const increaseBtns = await screen.findAllByRole("button", { name: ">" });

    const addToCartBtns = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    const cartLink = screen.getByTestId("cart-icon");

    await user.click(increaseBtns[0]);
    await user.click(increaseBtns[0]);
    await user.click(addToCartBtns[0]);
    await user.click(cartLink);

    const quantity = screen.getByRole("heading", {
      name: /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops x3/i,
    });
    const price = screen.getByTestId("cartItem-price");

    expect(quantity).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(price.textContent).toBe("£329.85");
  });

  it("Removes product from cart", async () => {
    const user = userEvent.setup();

    const product = {
      image:
        "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/C90184s.jpg?im=Resize,width=750",
      title: "test",
      id: 1,
      price: 60,
    };

    const updateCart = vi.fn();
    const removeFromCart = vi.fn();

    render(
      <MemoryRouter>
        <CartItem
          product={product}
          productQuantity={2}
          updateCart={updateCart}
          removeFromCart={removeFromCart}
        />
      </MemoryRouter>
    );

    const removeItemBtn = screen.getByRole("button", { name: /remove/i });

    await user.click(removeItemBtn);

    expect(removeFromCart).toHaveBeenCalled();
  });

  it("View product button works", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const addToCartBtns = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    const cartLink = screen.getByTestId("cart-icon");

    await user.click(addToCartBtns[0]);
    await user.click(cartLink);

    const viewProductBtn = screen.getByRole("link", { name: /view product/i });

    await user.click(viewProductBtn);

    const itemHeading = screen.getByRole("heading", {
      name: /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i,
    });

    const cartHeading = screen.queryByRole("heading", { name: /your cart/i });

    expect(itemHeading).toBeInTheDocument();
    expect(cartHeading).toBeNull();
  });
});
