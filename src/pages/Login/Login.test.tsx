import { screen, render } from "@testing-library/react";
import Login from "./Login";
import { describe, it } from "vitest";

describe("<Login />", () => {
  it("renders the title", () => {
    render(<Login />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
