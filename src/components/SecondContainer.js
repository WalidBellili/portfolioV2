const SecondContainer = () => {
  return (
    <article className="card-container">
      <div className="flex">
        <a href="https://aesthetic-mandazi-c51276.netlify.app">
          <img src={require("../assets/img/got.jpg")} alt="got" />
        </a>
        <a href="https://random-pokemon-wb.netlify.app">
          <img src={require("../assets/img/pokemonscreen.jpg")} alt="" />
        </a>
        <a href="https://spontaneous-concha-d8a90c.netlify.app/">
          <img
            src={require("../assets/img/ScreenCatalogue.jpg")}
            alt="catalogue"
          />
        </a>
      </div>
    </article>
  );
};

export default SecondContainer;
