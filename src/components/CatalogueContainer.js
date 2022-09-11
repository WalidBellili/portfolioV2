import React from "react";
import RedirectionCardNetlifyCatalogue from "./RedirectionCardNetlifyCatalogue";

const CatalogueContainer = () => {
  return (
    <>
      <article className="mooviceContainer">
        <h3>Catalogue</h3>

        <div className="imgMoovice">
          <img src={require("../assets/img/ScreenCatalogue.jpg")} alt="" />
        </div>
        <RedirectionCardNetlifyCatalogue />
      </article>
    </>
  );
};

export default CatalogueContainer;
