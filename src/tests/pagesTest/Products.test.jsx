import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Products from "../../pages/Products";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Products />
    </BrowserRouter>
  );
};

describe("Products page", () => {
  it("Should render Texts", () => {
    renderComponent();

    expect(screen.getByText("Produtos em estoque")).toBeInTheDocument();
    expect(screen.getByText("Ordenar por")).toBeInTheDocument();
  });

  it("should render All the radio button", () => {
    renderComponent();

    expect(screen.getAllByRole("radio")).toHaveLength(4);
  });

  it("Radio button should work", () => {
    renderComponent();

    const allRadio = screen.getAllByRole("radio");

    userEvent.click(allRadio[0]);
    expect(allRadio[0]).toBeChecked();
    userEvent.click(allRadio[1]);
    expect(allRadio[1]).toBeChecked();
    userEvent.click(allRadio[2]);
    expect(allRadio[2]).toBeChecked();
    userEvent.click(allRadio[3]);
    expect(allRadio[3]).toBeChecked();
  });
});
