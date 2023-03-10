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

    expect(
      screen.getAllByRole("link", { name: "Home" })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Tabela" })[0]
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Produtos" })[0]
    ).toBeInTheDocument();
  });

  it("should contain the correct href", () => {
    renderComponent();

    expect(screen.getAllByRole("link", { name: "Home" })[0]).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getAllByRole("link", { name: "Tabela" })[0]).toHaveAttribute(
      "href",
      "/tabela"
    );
    expect(
      screen.getAllByRole("link", { name: "Produtos" })[0]
    ).toHaveAttribute("href", "/produtos");
  });
});
