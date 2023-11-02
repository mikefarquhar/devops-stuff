import { render, screen } from "@solidjs/testing-library";
import { App } from "./App.tsx";

describe("App", () => {
  test('it should render "Hello, World!"', () => {
    render(() => <App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Hello, World!");
  });
});
