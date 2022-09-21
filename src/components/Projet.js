import React from "react";

const Projet = () => {
  return (
    <>
      <section className="projets" id="projets">
        <h2 className="title">Projets</h2>
        <article className="projects-container">
          <div className="projet" id="p1">
            <img src={require("../assets/img/newmoovice.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://aesthetic-mandazi-c51276.netlify.app">Moovice</a>
              <p>En cours</p>
            </div>
          </div>
          <div className="projet" id="p2">
            <img src={require("../assets/img/newGot.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://illustrious-cascaron-656aa5.netlify.app">Got</a>
              <p>En cours</p>
            </div>
          </div>
          <div className="projet" id="p3">
            <img
              src={require("../assets/img/ScreenCatalogue.jpg")}
              alt="Moovice"
            />
            <div className="project-infos">
              <a href="https://spontaneous-concha-d8a90c.netlify.app">
                Pokemon
              </a>
              <p>En cours</p>
            </div>
          </div>
        </article>
      </section>
      <div className="line-wrap">
        <div className="line"></div>
      </div>
    </>
  );
};

export default Projet;
