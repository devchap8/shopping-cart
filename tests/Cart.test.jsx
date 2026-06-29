import { describe, it, expect } from "vitest";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Outlet, Route, Routes } from 'react-router';
import {vi} from "vitest";
import App from '../src/App';
import Cart from "../src/Cart";

function setup() {
    return render (
    <MemoryRouter initialEntries={["/cart"]}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </MemoryRouter>
    )
}

it("renders default items", () => {
    setup();
    expect(screen.getByText("Television")).toBeInTheDocument();
    expect(screen.getByText("Gaming Mouse")).toBeInTheDocument();
    expect(screen.getByText("$245.00")).toBeInTheDocument();
});

it("clear cart button clears the cart", async () => {
  setup();
  vi.spyOn(window, 'confirm').mockImplementation(() => true);
  const user = userEvent.setup();
  await user.click(screen.getByTestId("clear-cart-btn"));
  expect(screen.queryByText("Television")).not.toBeInTheDocument();
  expect(screen.queryByText("Gaming Mouse")).not.toBeInTheDocument();
  expect(screen.getByText("$0.00")).toBeInTheDocument(); 
  expect(screen.queryByTestId("cart-size")).not.toBeInTheDocument();
});

it("trash button removes item from cart", async () => {
  setup();
  const user = userEvent.setup();
  await user.click(screen.getByTestId("gaming-mouse-trash"));
  expect(screen.getByText("Television")).toBeInTheDocument();
  expect(screen.queryByText("Gaming Mouse")).not.toBeInTheDocument();
  expect(screen.getByTestId("cart-size").innerHTML).toBe("1");
});

it("plus minus buttons work", async () => {
  setup();
  const user = userEvent.setup();
  await user.click(screen.getByTestId("television-plus"));
  expect(screen.getByTestId("television-amt").innerHTML).toBe("2");
  expect(screen.getByText("$400.00")).toBeInTheDocument();
  expect(screen.getByText("$445.00")).toBeInTheDocument();
  expect(screen.getByTestId("cart-size").innerHTML).toBe("3");
  // minus button should not bring amt below 1
  await user.click(screen.getByTestId("television-minus"));
  await user.click(screen.getByTestId("television-minus"));
  expect(screen.getByText("Television")).toBeInTheDocument();
  expect(screen.getByText("$245.00")).toBeInTheDocument();
  expect(screen.getByText("$200.00")).toBeInTheDocument();
  expect(screen.getByTestId("television-amt").innerHTML).toBe("1");
  expect(screen.getByTestId("cart-size").innerHTML).toBe("2");
})