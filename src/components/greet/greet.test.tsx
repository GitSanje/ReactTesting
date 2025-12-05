import { render,screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<div>{Greet("World")}</div>);
  const element = screen.getByText(/hello, world!/i);
  expect(element).toBeInTheDocument();
});