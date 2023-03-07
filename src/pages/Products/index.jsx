import style from "./Products.module.scss";
import Card from "./Card";
import products from "../../assets/repositorio.json";
import { Radio, RadioGroup, Stack, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Products() {
  const [value, setValue] = useState("1");
  const [produ, setProdu] = useState(products);

  useEffect(() => {
    console.log(value.toString());
    switch (value) {
      case "1":
        setProdu(products);
        console.log(produ);
        return;
      case "2":
        setProdu(
          [...products].sort((a, b) => {
            if (a.produto < b.produto) return -1;
            if (a.produto > b.produto) return 1;
            return 0;
          })
        );
        return;
      case "3":
        setProdu([...produ].sort((a, b) => a.quantidade - b.quantidade));
        console.log(produ);
        return;
      case "4":
        setProdu([...produ].sort((a, b) => a.defeito - b.defeito));
        console.log(produ);
        return;
      default:
        setProdu(products);
        return;
    }
  }, [value, produ]);

  return (
    <Flex direction="column" justify="center" align="center">
      <Text className={style.title}>Produtos em estoque</Text>
      <Text fontSize="xl" mt="4">
        Ordenar por
      </Text>
      <RadioGroup onChange={setValue} value={value} mb="4">
        <Stack direction="row" flexWrap="wrap" justify="center">
          <Radio value="1">Sem Ordem</Radio>
          <Radio value="2">Nome</Radio>
          <Radio value="3">Quantidade</Radio>
          <Radio value="4">Peças com defeito</Radio>
        </Stack>
      </RadioGroup>
      <div className={style.container}>
        {produ.map((item, ind) => {
          return <Card key={ind} item={item} />;
        })}
      </div>
    </Flex>
  );
}
