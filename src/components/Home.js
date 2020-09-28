import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__box">
        <h1>Hello, I'm Juan Alfonso De La Cruz Luque.</h1>
        <h1>
          I'm full stack web developer and a electronic engineer from Colombia.
        </h1>
        <h3>
          HTML/CSS | Bootstrap | Javascript | jQuery | Material Ui | ReactJs |
          NodeJs | ExpressJs | MongoDB | Firebase
        </h3>
        <Link to="/projects">
          <button>See my work</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
