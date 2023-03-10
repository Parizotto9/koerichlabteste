import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Home page", () => {
  it("should Load all texts and image", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

    expect(screen.getAllByRole("heading", { level: 2 })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 2 })[1]).toBeInTheDocument();
    expect(screen.getByAltText("Foto de Daniel")).toHaveAttribute(
      "src",
      "eu.jpg"
    );
  });
});
