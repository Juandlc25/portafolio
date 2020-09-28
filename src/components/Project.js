import React from "react";
import "./Project.css";

function Project({ name, img, live }) {
  return (
    <div className="project">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <button>
        <a href={live} target="_blank">
          Live demo
        </a>
      </button>
    </div>
  );
}

export default Project;
