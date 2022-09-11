import CatalogueContainer from "./CatalogueContainer";
// import Contact from "./Contact";
import GotContainer from "./GotContainer";
import MooviceContainer from "./MooviceContainer";
import PokemonContainer from "./PokemonContainer";

const Projects = () => {
  return (
    <main className="title">
      <h2>Mes projets</h2>
      <section className="projectsContainer">
        <MooviceContainer />

        <GotContainer />
        <PokemonContainer />
        <CatalogueContainer />
      </section>
    </main>
  );
};

export default Projects;
