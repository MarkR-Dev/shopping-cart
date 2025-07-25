import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  MemoryRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "../components/Header";
import routes from "../routes/routes";

describe("Header Component", () => {
  it("Renders Home link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
  });

  it("Switches route to Root when clicking Home link", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const homeLink = screen.getByRole("link", { name: "Home" });

    await user.click(homeLink);

    const heading = screen.queryByRole("heading", {
      name: /online store for all the items you could ever need!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Renders Products link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const productsLink = screen.getByRole("link", { name: "Products" });

    expect(productsLink).toBeInTheDocument();
  });

  it("Switches route to /products when clicking Products link", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const productsLink = screen.getByRole("link", { name: "Products" });

    await user.click(productsLink);

    const heading = screen.queryByRole("heading", {
      name: /products/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Renders Cart link", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const cartLink = screen.getByTestId("cart-icon");

    expect(cartLink).toBeInTheDocument();
  });

  it("Switches route to /cart when clicking Cart link", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const cartLink = screen.getByTestId("cart-icon");

    await user.click(cartLink);

    const heading = screen.queryByRole("heading", {
      name: /your cart/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Cart length number icon doesn't exist on page when cart is empty", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const cartItemNumber = screen.queryByLabelText("cart-length");

    expect(cartItemNumber).toBeNull();
  });

  it("Cart icon updates when cart quantity changes", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const addTocartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addTocartBtn[0]);

    const cartItemNumber = screen.queryByLabelText("cart-length");

    expect(cartItemNumber).not.toBeNull();
    expect(cartItemNumber.textContent).toBe("1");
  });

  it("Cart icon updates when multiple different items are added to cart", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const addTocartBtn = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addTocartBtn[0]);
    await user.click(addTocartBtn[1]);

    const cartItemNumber = screen.queryByLabelText("cart-length");

    expect(cartItemNumber).not.toBeNull();
    expect(cartItemNumber.textContent).toBe("2");
  });
});
