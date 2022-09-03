const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <article className="link">
        <ul>
          <a href="https://github.com/WalidBellili">GITHUB</a>
          <a href="https://www.linkedin.com/in/walidbellili/">LINKEDIN</a>
          <a href="mailto: walid.07@hotmail.com">Ecrivez-moi</a>
        </ul>
        <img src={require("../assets/img/walidbellili.jpg")} alt="" />
      </article>
    </div>
  );
};

export default Contact;
