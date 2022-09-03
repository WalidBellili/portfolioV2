const Container = () => {
  return (
    <>
      <div className="info-container">
        <article className="first-block">
          <h1>Hello, je suis Walid Bellili.</h1>
          <p className="first-paragraphe">Je suis développeur web junior</p>
        </article>
        <article className="first-inner-block">
          <h2>Formation</h2>
        </article>
        <div className="formation-card">
          <p>
            Je suis en pleine reconversion professionnelle. Apres 10 ans de
            service dans les brasseries Parisienne, j'ai décidé de devenir
            Développeur Web.
          </p>
          <p>
            Je viens de terminer un bootcamp de 3 mois chez Konexio (30 Mai 22 à
            30 Aout 22).
          </p>
          <p>
            Coté Front : J'ai appris le HTML/CSS d'abord et diverse libraris css
            (Bootstrap, Tailwind). J'ai ensuite découvert Javascript. Ce qui m'a
            permis de me former efficacement à ReactJs.
          </p>
          <p>
            Coté Back : J'ai apris à concevoir des API Rest, à faire des CRUD
            avec NodeJs. J'ai également des notions de base de donnée SQL.
          </p>
          <p>
            Etant quelqu'un d'autant passioné que curieux,je suis ouvert à
            continuer mon apprentissage en entreprise sur d'autres langages.
          </p>
        </div>
      </div>
    </>
  );
};

export default Container;
