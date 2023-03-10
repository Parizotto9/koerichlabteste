import img from "../../assets/images/eu.jpg";
import style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={style.box}>
      <h1 className={style.title}>Introdução</h1>
      <h2 className={style.subTitle}>Sobre o projeto</h2>
      <p className={style.text}>
        Projeto Feito em React.js, onde é consumido informações de um json para
        alimentar uma tabela e alguns cards dinamicamente. Uma página é uma
        Tabela que tem uma barra de pesquisa e uma checkbox que filtram os dados
        desse json e mesmo saindo da página fica salvo a sua pesquisa. Já na
        página de Produtos é exposto os cards com algumas informações dos
        produtos, nele tem a quarto opções de ordenar esses produtos, e assim
        como a Tabela mesmo saindo da página ou fechando, ao voltar continuará
        salvo suas preferências. Além disso, o projeto está todo testado
        utilizando Jest e testing-library.
      </p>
      <h2 className={style.subTitle}>Sobre mim</h2>
      <img src={img} alt="Foto de Daniel" className={style.img} />
      <p className={style.text}>
        Me chamo Daniel Parizotto, larguei Engenharia Civil no começo da
        pandemia, pois me apaixonei por programar e estou cursando atualmente
        Analise e desenvolvimento de sistemas na INFNET, moro em Recife e sou um
        Desenvolvedor FrontEnd, já trabalhei com BackEnd e tenho alguns projetos
        publicados, mas tenho mais experiência com FrontEnd, futuramente penso
        em ser FullStack. Sou uma pessoa comunicativa, e aprendo rápido, ainda
        não tinha usado nenhuma biblioteca de testes, primeira vez com esse
        projeto. Eu gostei muito da empresa e acredito que poderia contribuir de
        maneira mutua, já aprendi bastante só pelo projeto e quero continuar
        aprendendo e crescendo.
      </p>
    </div>
  );
}
