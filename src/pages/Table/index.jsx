import style from "./Table.module.scss";
import { useState, useEffect } from "react";
import tableData from "../../assets/repositorio.json";
import { Checkbox } from "@chakra-ui/react";

export default function Table() {
  const [search, setSearch] = useState(
    localStorage.getItem("tableSearch") || ""
  );
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("tableCheckbox")) || false
  );
  console.log();
  const header = [
    "Produto",
    "Quantidade",
    " Peças Defeituosas",
    "Peças a Venda",
    "Valor",
  ];

  const updateCheckbox = () => {
    setChecked(!checked);
    console.log(checked, "qqui");
  };

  useEffect(() => {
    // console.log(checked);
    const onClose = () => {
      localStorage.setItem("tableSearch", search);
      localStorage.setItem("tableCheckbox", JSON.stringify(checked));
    };

    window.onbeforeunload = onClose;

    return () => {
      window.onbeforeunload = null;
    };
  }, [search, checked]);

  return (
    <div className={style.tablePage}>
      <div>
        <input
          className={style.input}
          value={search}
          placeholder="Procure um produto"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={style.checkbox}>
        <Checkbox isChecked={checked} onChange={updateCheckbox}>
          Exibir produtos com 50 peças ou mais
        </Checkbox>
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
