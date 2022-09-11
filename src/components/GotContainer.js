import RedirectionCardNetlifyGot from "./RedirectionCardNetlifyGot";

const GotContainer = () => {
  return (
    <>
      <article className="mooviceContainer">
        <h3>Game of throne</h3>

        <div className="imgMoovice">
          <img src={require("../assets/img/newGot.jpg")} alt="" />
        </div>
        <RedirectionCardNetlifyGot />
      </article>
    </>
  );
};

export default GotContainer;
