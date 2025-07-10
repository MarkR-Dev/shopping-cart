import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";

describe("View Product Component", () => {
  it("Renders a product", async () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products/2"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const productTitle = await screen.findByRole("heading", {
      name: /Mens Casual Premium Slim Fit T-Shirts/i,
    });

    expect(productTitle).toBeInTheDocument();
  });

  it("Adds a product to cart", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products/2"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const addtoCartBtn = screen.getByRole("button", {
      name: /Add to cart/i,
    });

    await user.click(addtoCartBtn);

    const cartItemNumber = screen.queryByLabelText("cart-length");

    expect(cartItemNumber).not.toBeNull();
    expect(cartItemNumber.textContent).toBe("1");
  });

  it("Returns to all products when button clicked", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products/2"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const returnBtn = screen.getByRole("link", {
      name: /Return To Products/i,
    });

    await user.click(returnBtn);

    const productsHeading = screen.getByRole("heading", {
      name: /products/i,
    });

    expect(productsHeading).toBeInTheDocument();
  });
});
