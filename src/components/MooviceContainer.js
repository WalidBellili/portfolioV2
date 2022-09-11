const MooviceContainer = () => {
  return (
    <>
      <h3>Moovice</h3>
      <article className="mooviceContainer">
        <div className="txtMoovice">
          <p>ce projet est codé en React. Il utilise l'API The MoovieDB</p>
          <p>
            C'est mon projet préféré. Il me permet de faire des requetes API et
            de jouer avec les données.
          </p>
          <p>
            Avec Moovice, je pousse la logique de components un peu plus chaque
            jour. Mon but est d'utiliser au maximum cette API pour faire un site
            le plus complet possible.
          </p>
        </div>
        <div className="imgMoovice">
          <img src={require("../assets/img/newmoovice.jpg")} alt="" />
        </div>
      </article>
    </>
  );
};

export default MooviceContainer;
