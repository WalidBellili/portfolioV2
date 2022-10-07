import React from "react";

const Projet = () => {
  return (
    <>
      <section className="projets" id="projets">
        <h2 className="title">Projets</h2>
        <article className="projects-container">
          <div className="projet" id="p1">
            <img src={require("../assets/img/moovice.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://frabjous-liger-669b85.netlify.app/">Moovice</a>
              <p>En cours</p>
            </div>
          </div>
          <div className="projet" id="p2">
            <img src={require("../assets/img/cocktails.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://helpful-hamster-4d739f.netlify.app/">TodoList</a>
              <p>En cours</p>
            </div>
          </div>
          <div className="projet" id="p1">
            <img src={require("../assets/img/newGot.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://illustrious-cascaron-656aa5.netlify.app">Got</a>
              <p>En cours</p>
            </div>
          </div>
          <div className="projet" id="p2">
            <img src={require("../assets/img/heros.jpg")} alt="heroes" />
            <div className="project-infos">
              <a href="https://playful-nougat-fa6390.netlify.app/">
                Hero FULLSTACK
              </a>
              <p>En cours</p>
            </div>
          </div>

          <div className="projet" id="p3">
            <img src={require("../assets/img/Todo.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://beamish-babka-3f3716.netlify.app/">TodoList</a>
              <p>En cours</p>
            </div>
          </div>
          {/* <div className="projet" id="p1">
            <img src={require("../assets/img/Todo.jpg")} alt="Moovice" />
            <div className="project-infos">
              <a href="https://beamish-babka-3f3716.netlify.app/">TodoList</a>
              <p>En cours</p>
            </div>
          </div> */}
        </article>
      </section>
      <div className="line-wrap">
        <div className="line"></div>
      </div>
    </>
  );
};

export default Projet;
