import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <article className="link">
        <ul>
          <Link to={"https://github.com/WalidBellili"}>GITHUB</Link>
          <Link to={"https://www.linkedin.com/in/walidbellili/"}>LINKEDIN</Link>
          <li>walid.07@hotmail.fr</li>
        </ul>
        <img src={require("../assets/img/walidbellili.jpg")} alt="" />
      </article>
    </div>
  );
};

export default Contact;
