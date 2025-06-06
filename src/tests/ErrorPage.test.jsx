import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes/routes";

describe("Error Page component", () => {
  it("Switches route to Root when clicking return to Home link", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/wrongroute"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const errorHeading = screen.getByRole("heading", {
      name: /something went wrong/i,
    });

    const returnLink = screen.getByRole("link", {
      name: /return to the home page/i,
    });

    expect(errorHeading).toBeInTheDocument();

    await user.click(returnLink);

    const homeHeading = screen.queryByRole("heading", {
      name: /online store for all the items you could ever need!/i,
    });

    expect(homeHeading).toBeInTheDocument();
  });
});
