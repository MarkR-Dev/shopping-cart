import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";

describe("Products Page", () => {
  it("Displays product items", async () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const products = await screen.findAllByTestId("product-card");

    expect(products).not.toBeNull();
    expect(products.length).toBe(20);
  });
});
