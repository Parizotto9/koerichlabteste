import Menu from "../../components/Menu";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
};

describe("Menu", () => {
  it("should render correctly", () => {
    renderComponent();

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should contain links", () => {
    renderComponent();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Tabela" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Produtos" })).toBeInTheDocument();
  });

  it("should contain the correct href", () => {
    renderComponent();

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Tabela" })).toHaveAttribute(
      "href",
      "/tabela"
    );
    expect(screen.getByRole("link", { name: "Produtos" })).toHaveAttribute(
      "href",
      "/produtos"
    );
  });
});
