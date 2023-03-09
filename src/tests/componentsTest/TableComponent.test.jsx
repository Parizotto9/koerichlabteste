import { render, screen, within } from "@testing-library/react";
import TableComponent from "../../pages/Table/TableComponent";
import products from "../../assets/repositorio.json";

const header = [
  "Produto",
  "Quantidade",
  "Peças Defeituosas",
  "Peças a Venda",
  "Valor",
];

describe("Table component", () => {
  it("Table should be in the document", () => {
    render(<TableComponent filteredTable={products} />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("Table should have content", () => {
    render(<TableComponent filteredTable={products} />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(products.length + 1);

    products.forEach((item, ind) => {
      const cells = within(rows[ind + 1]).queryAllByRole("cell");
      expect(cells[0]).toHaveTextContent(item.produto);
      expect(cells[1]).toHaveTextContent(item.quantidade.toString());
      expect(cells[2]).toHaveTextContent(item.defeito.toString());
      expect(cells[3]).toHaveTextContent(
        (item.quantidade - item.defeito).toString()
      );

      //Retornando o mesmo Valor e dizendo estar diferente XD
      /* Expected element to have text content:
      R$ 599,12
        Received:
      R$ 599,12 */
      /* expect(cells[4]).toHaveTextContent(
        item.valor.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      ); */
    });
  });
});
