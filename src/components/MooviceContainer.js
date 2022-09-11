import RedirectionCardNetlifyMoovice from "./RedirectionCardNetlifyMoovice";

const MooviceContainer = () => {
  return (
    <section className="responsive">
      <article className="mooviceContainer">
        <h3>Moovice</h3>

        <div className="imgMoovice">
          <img src={require("../assets/img/newmoovice.jpg")} alt="" />
        </div>
        <RedirectionCardNetlifyMoovice />
      </article>
    </section>
  );
};

export default MooviceContainer;
