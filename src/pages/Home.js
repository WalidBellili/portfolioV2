import Container from "../components/Container";
import Hedaer from "../components/Hedaer";

const Home = () => {
  return (
    <>
      <Hedaer />
      <section className="container">
        <article className="main-container">
          <Container />
        </article>
      </section>
    </>
  );
};

export default Home;
