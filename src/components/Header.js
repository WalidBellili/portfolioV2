const Header = () => {
  return (
    <header>
      <article className="links">
        <a href="#projet">projets</a>
        <a href="mailto:walid.07@hotmail.fr">contact</a>
      </article>
      <article className="wrap">
        <div className="appear" id="h1-wrap">
          <h1>Walid Bellili</h1>
        </div>
      </article>
      <article className="wrap">
        <div className="appear" id="firstH2">
          <h2>Développeur</h2>
        </div>
      </article>
      <article className="wrap">
        <div className="appear" id="secondH2">
          <h2>Front-End</h2>
        </div>
      </article>
      <div className="scroll-wrap">
        <p>scroll</p>
      </div>
    </header>
  );
};

export default Header;
