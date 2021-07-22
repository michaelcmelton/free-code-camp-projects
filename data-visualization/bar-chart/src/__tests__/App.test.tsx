import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App Component", () => {
  it("renders successfully", () => {
    render(<App />);
    expect(screen.getByText(/Hello Vite/gi)).toBeInTheDocument();
  });

  it("when clicked, button  increases count", () => {
    render(<App />);
    fireEvent(
      screen.getByText(/count is\:/gi),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(screen.getByText("count is: 1")).toBeInTheDocument();
  });
});
