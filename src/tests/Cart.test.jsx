import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";
import userEvent from "@testing-library/user-event";

describe("Cart Component", () => {
  it("Empty cart displays correctly", async () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const heading = await screen.findByRole("heading", {
      name: /It looks like your cart is empty, let's change that!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Products page link works", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const viewProductsLink = screen.getByRole("link", {
      name: /view products/i,
    });

    await user.click(viewProductsLink);

    const productsHeading = screen.getByRole("heading", { name: /products/i });
    const cartHeading = screen.queryByRole("heading", { name: /your cart/i });

    expect(productsHeading).toBeInTheDocument();
    expect(cartHeading).not.toBeInTheDocument();
  });

  it("Displays correct cart total", async () => {
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
    await user.click(addToCartBtns[1]);
    await user.click(addToCartBtns[2]);
    await user.click(cartLink);

    const totalPrice = screen.getByTestId("total-price");

    expect(totalPrice.textContent).toStrictEqual("£188.24");
  });

  it("Continue shopping button works", async () => {
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

    const continueShoppingBtn = screen.getByRole("link", {
      name: /Continue shopping/i,
    });

    await user.click(continueShoppingBtn);

    const heading = screen.getByRole("heading", { name: /products/i });

    expect(heading).toBeInTheDocument();
  });

  it("Clear cart button works", async () => {
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

    const clearCartBtn = screen.getByRole("button", { name: /clear cart/i });

    await user.click(clearCartBtn);

    const emptyCartHeading = screen.getByRole("heading", {
      name: /It looks like your cart is empty, let's change that!/i,
    });

    expect(emptyCartHeading).toBeInTheDocument();
  });
});
