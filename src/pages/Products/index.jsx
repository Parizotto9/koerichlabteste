import style from "./Products.module.scss";
import Card from "./Card";
import products from "../../assets/repositorio.json";

export default function Products() {
  return (
    <div>
      {/* <div>
        <h3>Filtros</h3>
      </div> */}
      <div className={style.container}>
        {products.map((item, ind) => {
          return <Card key={ind} item={item} />;
        })}
      </div>
    </div>
  );
}
