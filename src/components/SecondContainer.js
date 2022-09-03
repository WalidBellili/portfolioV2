import { Link } from "react-router-dom";

const SecondContainer = () => {
  return (
    <article className="card-container">
      <div className="flex">
        <Link to={""}>
          <img src={require("../assets/img/ScreenCatalogue.jpg")} alt="" />
        </Link>
        <Link to={""}>
          <img src={require("../assets/img/pokemonscreen.jpg")} alt="" />{" "}
        </Link>
        <Link to={""}>
          <img src={require("../assets/img/got.jpg")} alt="" />
        </Link>
      </div>
    </article>
  );
};

export default SecondContainer;
