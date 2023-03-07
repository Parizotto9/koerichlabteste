import style from "./Card.module.scss";

export default function Card({ item }) {
  const img = require(`../../../assets/images/${item.imagem}`);
  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt={item.produto} />
      <div className={style.cardInfo}>
        <div>
          <h5 className={style.title}>{item.produto}</h5>
          <span>Itens em estoque: {item.quantidade - item.defeito}</span>
        </div>
        <div className={style.price}>
          {item.valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </div>
  );
}
