import RedirectionCardNetlifyPokemon from "./RedirectionCardNetlifyPokemon";

const PokemonContainer = () => {
  return (
    <>
      <article className="mooviceContainer">
        <h3>Pokemon</h3>

        <div className="imgMoovice">
          <img src={require("../assets/img/pokemonscreen.jpg")} alt="" />
        </div>
        <RedirectionCardNetlifyPokemon />
      </article>
    </>
  );
};

export default PokemonContainer;
