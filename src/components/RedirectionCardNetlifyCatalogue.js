import React from "react";

const RedirectionCardNetlifyCatalogue = () => {
  return (
    <div className="redirection">
      <a href="https://github.com/WalidBellili/catalogue">
        <i class="fa-brands fa-github">Le code est ici</i>
      </a>
      <a href="https://spontaneous-concha-d8a90c.netlify.app/movie/4">
        <img src={require("../assets/img/netlify.png")} alt="netlify" />
      </a>
    </div>
  );
};

export default RedirectionCardNetlifyCatalogue;
