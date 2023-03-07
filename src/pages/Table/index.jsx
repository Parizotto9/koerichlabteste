import style from "./Table.module.scss";
import { useState } from "react";
import tableData from "../../assets/repositorio.json";

export default function Table() {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const header = [
    "Produto",
    "Quantidade",
    " Peças Defeituosas",
    "Peças a Venda",
    "Valor",
  ];
  const updateCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className={style.tablePage}>
      <div>
        <input
          className={style.input}
          placeholder="Procure um produto"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={style.checkbox}>
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={updateCheckbox}
        />
        <label htmlFor="checkbox">Exibir produtos com 50 peças ou mais</label>
      </div>
      <table className={style.table}>
        <thead>
          <tr className={style.tableHeader}>
            {header.map((name, ind) => {
              return <th key={ind}>{name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData
            .filter((data) => {
              if (checked === true && data.quantidade - data.defeito < 50) {
                return false;
              }
              if (search === "") {
                return data;
              } else if (
                data.produto.toLowerCase().includes(search.toLowerCase())
              ) {
                return data;
              }
            })
            .map((item, ind) => {
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
    </div>
  );
}
