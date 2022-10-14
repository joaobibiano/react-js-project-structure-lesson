import { screen, render } from "@testing-library/react";
import ShowRoom from "./ShowRoom";
import { describe, it } from "vitest";

describe("<ShowRoom />", () => {
  it("renders the title", () => {
    render(<ShowRoom />);

    expect(screen.getByText("ShowRoom")).toBeInTheDocument();
  });

  it("renders the cars", () => {});
});
