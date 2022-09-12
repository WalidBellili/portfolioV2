import React from "react";

const Competences = () => {
  return (
    <>
    <section className="competences">
      <h2 className="title">
        <span>C</span>
        <span>o</span>
        <span>m</span>
        <span>p</span>
        <span>é</span>
        <span>t</span>
        <span>e</span>
        <span>n</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h2>

      <article className="wrap">
        <div className="appear">
          <p>React</p>
        </div>
      </article>
      <article className="wrap">
        <div className="appear">
          <p>Javascript</p>
        </div>
      </article>
      <article className="wrap">
        <div className="appear">
          <p>CSS/SASS</p>
        </div>
      </article>
      <article className="wrap">
        <div className="appear">
          <p>HTML</p>
        </div>
      </article>
    </section>
    <div className="line-wrap">
        <div className="line"></div>
    </div>
    </>
    
  );
};

export default Competences;
