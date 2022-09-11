const CatalogueContainer = () => {
  return (
    <>
      <h3>Catalogue</h3>
      <article className="mooviceContainer catalogue">
        <div className="txtMoovice">
          <p>Ce projet est un prémice à Moovice.</p>
          <p>
            Il m'a permis de faire un appel API. Et j'ai pu apprendre à utiliser
            un peu plus react-router-dom. Notemment avec le hook useParams
          </p>
        </div>
        <div className="imgMoovice">
          <img src={require("../assets/img/ScreenCatalogue.jpg")} alt="" />
        </div>
      </article>
    </>
  );
};

export default CatalogueContainer;
