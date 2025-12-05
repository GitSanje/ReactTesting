import { render,screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greet from "./greet";


test("Greet renders correctly", () => {
  render(<Greet/>);
  const element = screen.getByText("Hello");
  expect(element).toBeInTheDocument();
});

test( "Greet renders with a name", () => {
    render(<Greet name="Alice"/>);
    const textelement = screen.getByText("Hello Alice");
    expect(textelement).toBeInTheDocument();
})