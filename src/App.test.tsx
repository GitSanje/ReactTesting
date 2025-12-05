import { render,screen } from "@testing-library/react";

import { test,expect } from "vitest";
import App from "./App";
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Vite + React");
  expect(linkElement).toBeInTheDocument();
});