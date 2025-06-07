import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";

describe("Home Component", () => {
  it("Renders Hero", () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const heading = screen.getByRole("heading", {
      name: /Online store for all the items you could ever need!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Switches to products page when clicking link in Hero", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const productsLink = screen.getByRole("link", { name: /view products/i });

    await user.click(productsLink);

    const productsHeading = screen.getByRole("heading", {
      name: /products page/i,
    });

    expect(productsHeading).toBeInTheDocument();
  });
});
