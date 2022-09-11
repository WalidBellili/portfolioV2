const PokemonContainer = () => {
  return (
    <>
      <h3>Pokemon</h3>
      <article className="mooviceContainer">
        <div className="txtMoovice">
          <p>
            Avec ce projet, j'ai appris à utiliser le hook "useParams". C'était
            une toute nouvelle notion que j'apprecie énormement.
          </p>
        </div>
        <div className="imgMoovice">
          <img src={require("../assets/img/pokemonscreen.jpg")} alt="" />
        </div>
      </article>
    </>
  );
};

export default PokemonContainer;
