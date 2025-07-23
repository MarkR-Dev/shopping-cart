import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CartItemQuantityInput from "../components/CartItemQuantityInput";

describe("Cart item quantity input component", () => {
  it("Pressing decrease quantity calls the update cart function", async () => {
    const user = userEvent.setup();

    const setQuantity = vi.fn();
    const updateCart = vi.fn();

    render(
      <MemoryRouter>
        <CartItemQuantityInput
          quantity={2}
          setQuantity={setQuantity}
          updateCart={updateCart}
          productId={1}
        />
      </MemoryRouter>
    );

    const decreaseBtn = screen.getByRole("button", { name: "<" });

    await user.click(decreaseBtn);

    expect(updateCart).toHaveBeenCalled();
  });

  it("Pressing increase quantity calls the update cart function", async () => {
    const user = userEvent.setup();

    const setQuantity = vi.fn();
    const updateCart = vi.fn();

    render(
      <MemoryRouter>
        <CartItemQuantityInput
          quantity={1}
          setQuantity={setQuantity}
          updateCart={updateCart}
          productId={1}
        />
      </MemoryRouter>
    );

    const increaseBtn = screen.getByRole("button", { name: ">" });

    await user.click(increaseBtn);

    expect(updateCart).toHaveBeenCalled();
  });

  it("When the input changes via onChange event it calls the update cart function", async () => {
    const user = userEvent.setup();

    const setQuantity = vi.fn();
    const updateCart = vi.fn();

    render(
      <MemoryRouter>
        <CartItemQuantityInput
          quantity={1}
          setQuantity={setQuantity}
          updateCart={updateCart}
          productId={1}
        />
      </MemoryRouter>
    );

    const input = screen.getByRole("spinbutton");

    await user.type(input, "4");

    expect(updateCart).toHaveBeenCalled();
  });
});
