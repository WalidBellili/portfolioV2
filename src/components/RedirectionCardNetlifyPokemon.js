import React from "react";

const RedirectionCardNetlifyPokemon = () => {
  return (
    <div className="redirection">
      <a href="https://github.com/WalidBellili/pokemons">
        <i class="fa-brands fa-github">Le code est ici</i>
      </a>
      <a href="https://illustrious-cascaron-656aa5.netlify.app/">
        <img src={require("../assets/img/netlify.png")} alt="netlify" />
      </a>
    </div>
  );
};

export default RedirectionCardNetlifyPokemon;
