import style from "./TableComponent.module.scss";

export default function TableComponent({ filteredTable }) {
  const header = [
    "Produto",
    "Quantidade",
    " Peças Defeituosas",
    "Peças a Venda",
    "Valor",
  ];

  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tableHeader}>
          {header.map((name, ind) => {
            return <th key={ind}>{name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {filteredTable.map((item, ind) => {
          return (
            <tr className={style.tableInfo} key={ind}>
              <td>{item.produto}</td>
              <td>{item.quantidade}</td>
              <td>{item.defeito}</td>
              <td>{item.quantidade - item.defeito}</td>
              <td>
                {item.valor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
