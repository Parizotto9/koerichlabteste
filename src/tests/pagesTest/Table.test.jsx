import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Table from "../../pages/Table";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Table />
    </BrowserRouter>
  );
};

describe("Table page", () => {
  it("Should render Title", () => {
    renderComponent();

    expect(screen.getByText("Tabela dos produtos")).toBeInTheDocument();
  });

  it("Should render Checkbox", () => {
    renderComponent();

    expect(
      screen.getByText("Exibir produtos com 50 peças ou mais")
    ).toBeInTheDocument();
  });

  it("Checkbox should work", () => {
    renderComponent();

    const checkBox = screen.getByRole("checkbox");

    expect(checkBox).not.toBeChecked();
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  it("Should render Search bar", () => {
    renderComponent();

    expect(
      screen.getByPlaceholderText("Procure um produto")
    ).toBeInTheDocument();
  });

  it("Search should work", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Procure um produto");

    fireEvent.change(input, { target: { value: "Sofa" } });

    expect(screen.getByText("Sofa")).toBeInTheDocument();
  });
});
