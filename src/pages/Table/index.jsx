import style from "./Table.module.scss";
import { useState, useEffect } from "react";
import tableData from "../../assets/repositorio.json";
import { Checkbox, Text } from "@chakra-ui/react";
import TableComponent from "./TableComponent";

export default function Table() {
  const [search, setSearch] = useState(
    localStorage.getItem("tableSearch") || ""
  );
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("tableCheckbox")) || false
  );

  const updateCheckbox = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const onClose = () => {
      localStorage.setItem("tableSearch", search);
      localStorage.setItem("tableCheckbox", JSON.stringify(checked));
    };

    window.onbeforeunload = onClose;

    return () => {
      window.onbeforeunload = null;
    };
  }, [search, checked]);

  const filteredTable = tableData.filter((data) => {
    if (checked === true && data.quantidade - data.defeito < 50) {
      return false;
    }
    if (search === "") {
      return data;
    } else if (data.produto.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  });

  return (
    <div className={style.tablePage}>
      <Text className={style.title}>Tabela dos produtos</Text>
      <div>
        <input
          className={style.input}
          value={search}
          placeholder="Procure um produto"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={style.checkbox}>
        <Checkbox isChecked={checked} mt="4" onChange={updateCheckbox}>
          Exibir produtos com 50 peças ou mais
        </Checkbox>
      </div>
      <TableComponent filteredTable={filteredTable} />
    </div>
  );
}
