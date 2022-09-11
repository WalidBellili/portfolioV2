import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <article className="contact-container">
        <a href="https://github.com/WalidBellili">Github</a>
        <img
          src={require("../assets/img/walidbellili.jpg")}
          alt="walid bellili"
        />
        <a href="https://www.linkedin.com/in/walidbellili/">Linkedin</a>
        <a href="mailto:walid.07@hotmail.fr">walid.07@hotmail.fr</a>
      </article>
    </section>
  );
};

export default Contact;
