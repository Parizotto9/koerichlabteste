import style from "./Table.module.scss";
import tableData from "../../assets/repositorio.json";

export default function Table() {
  console.log(tableData);
  const header = ["Produto", "Quantidade", " Peças Defeituosas", "Peças a Venda"/* , "Valor" */];
  return (
    <div className={style.tablePage}>
      <table className={style.table}>
        <tr className={style.tableHeader}>
          {header.map((name) => {
            return <th>{name}</th>;
          })}
        </tr>
        {tableData.map((item) => {
          return (
            <tr className={style.tableInfo}>
              <td>{item.produto}</td>
              <td>{item.quantidade}</td>
              <td>{item.defeito}</td>
              <td>{item.quantidade - item.defeito}</td>
              {/* <td>{item.valor} RS</td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
