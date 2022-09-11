import CatalogueContainer from "./CatalogueContainer";
import GotContainer from "./GotContainer";
import MooviceContainer from "./MooviceContainer";
import PokemonContainer from "./PokemonContainer";

const Projects = () => {
  return (
    <section className="projectsContainer">
      <div className="articlesContainer">
        <h2>Mes projets</h2>
        <MooviceContainer />
        <GotContainer />
        <PokemonContainer />
        <CatalogueContainer />
      </div>
    </section>
  );
};

export default Projects;
