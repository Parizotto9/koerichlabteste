import { render, screen } from "@testing-library/react";
import Card from "../../pages/Products/Card";
import products from "../../assets/repositorio.json";

describe("Card component", () => {
  products.forEach((cardInfo, ind) => {
    it(`Card ${ind} should render correctly`, () => {
      render(<Card item={cardInfo} />);

      expect(screen.getByText(cardInfo.produto)).toBeInTheDocument();
      expect(screen.getByAltText(cardInfo.produto)).toHaveAttribute(
        "src",
        cardInfo.imagem
      );
      expect(
        screen.getByText(
          `Itens em estoque: ${(
            cardInfo.quantidade - cardInfo.defeito
          ).toString()}`
        )
      ).toBeInTheDocument();
    });
  });
});
