import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createMemoryRouter,
  RouterProvider,
  MemoryRouter,
} from "react-router-dom";
import routes from "../routes/routes";
import QuantityInput from "../components/QuantityInput";

describe("Quantity Input", () => {
  it("Calls the callback function when pressing decrease", async () => {
    const user = userEvent.setup();
    const quantity = 1;
    const setQuantity = vi.fn();

    render(
      <MemoryRouter>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </MemoryRouter>
    );

    const decrease = screen.getByRole("button", { name: "<" });

    await user.click(decrease);

    expect(setQuantity).toHaveBeenCalledOnce();
  });

  it("Calls the callback function when pressing increase", async () => {
    const user = userEvent.setup();
    const quantity = 1;
    const setQuantity = vi.fn();

    render(
      <MemoryRouter>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </MemoryRouter>
    );

    const increase = screen.getByRole("button", { name: ">" });

    await user.click(increase);

    expect(setQuantity).toHaveBeenCalledOnce();
  });

  it("Changes the input value when typing", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const inputArray = await screen.findAllByRole("spinbutton");
    const firstInput = inputArray[0];

    expect(firstInput.value).toBe("1");

    await user.type(firstInput, "4");

    expect(firstInput.value).toBe("14");
  });

  it("Doesn't allow the quantity value to be less than 1", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const inputArray = await screen.findAllByRole("spinbutton");
    const firstInput = inputArray[0];
    const decreaseArray = await screen.findAllByRole("button", { name: "<" });
    const firstDecrease = decreaseArray[0];

    expect(firstInput.value).toBe("1");

    await user.click(firstDecrease);

    expect(firstInput.value).toBe("1");
  });

  it("Doesn't allow the quantity value to be greater than 99", async () => {
    const user = userEvent.setup();

    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/products"],
    });

    render(<RouterProvider router={memoryRouter} />);

    const inputArray = await screen.findAllByRole("spinbutton");
    const firstInput = inputArray[0];
    const increaseArray = await screen.findAllByRole("button", { name: ">" });
    const firstIncrease = increaseArray[0];

    expect(firstInput.value).toBe("1");

    await user.type(firstInput, "100");

    expect(firstInput.value).toBe("99");

    await user.click(firstIncrease);

    expect(firstInput.value).toBe("99");
  });
});
