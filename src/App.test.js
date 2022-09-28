import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Clients and ideas are the bottom line/i
  );
  expect(linkElement).toBeInTheDocument();
});
