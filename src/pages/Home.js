import Contact from "../components/Contact";
import Container from "../components/Container";
import Hedaer from "../components/Hedaer";
import SecondContainer from "../components/SecondContainer";

const Home = () => {
  return (
    <>
      <Hedaer />
      <section className="parent-container">
        <Container />
      </section>
      <section className="second-container">
        <SecondContainer />
      </section>
      <section className="third-container">
        <Contact />
      </section>
    </>
  );
};

export default Home;
