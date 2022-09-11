import CatalogueContainer from "./CatalogueContainer";
import Contact from "./Contact";
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
        <Contact />
      </div>
    </section>
  );
};

export default Projects;
