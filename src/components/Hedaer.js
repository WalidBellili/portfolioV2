import { Link } from "react-router-dom";
const Hedaer = () => {
  return (
    <header>
      <nav>
        <h2>Walid Bellili</h2>
        <ul>
          <Link to={"https://github.com/WalidBellili"}>GITHUB</Link>
          <Link to={"https://www.linkedin.com/in/walidbellili/"}>LINKEDIN</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Hedaer;
