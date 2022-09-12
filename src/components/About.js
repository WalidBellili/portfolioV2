import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <article className="img1-wrap">
          <div className="img img1">
            <img
              src={require("../assets/img/walidbellili.jpg")}
              alt="walid bellili"
              className="img1"
            />
          </div>
        </article>
        <div className="h2-wrap">
          <h2>A propos</h2>
        </div>
        <p>ddddddddddddzzzzzzzzzzzzzzzzzzzzzzzz</p>
      </section>
      <div className="line-wrap">
        <div className="line"></div>
      </div>
    </>
  );
};

export default About;
