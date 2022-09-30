const About = () => {
  return (
    <section className="about">
      <article>
        <h2>A propos</h2>
      </article>
      <article>
        <img
          src={require("../assets/img/walidbellili.jpg")}
          alt="walid bellili"
          className="img1"
        />
      </article>
      <article className="txt">
        <p>
          Ayant travaillé 10 années dans les brasseries Parisiennes, j'ai décidé
          de donner un second souffle à ma vie professionnelle.
        </p>
        <p>
          J'ai découvert l'univers du développement web en codant tout seul à la
          maison. Puis j'ai découvert Konexio qui m'a permit de suivre un
          bootcamp sur 3 mois en fullstack
        </p>
      </article>
      <div className="line-wrap">
        <div className="line"></div>
      </div>
    </section>
  );
};

export default About;
