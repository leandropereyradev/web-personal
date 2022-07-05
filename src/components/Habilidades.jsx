import React from "react";
import skills from "../assets/img/base/skills.png";

const Habilidades = () => {
  return (
    <div className="section" id="habilidades">
      <div>
        <h1 className="title">Habilidades</h1>
      </div>
      <div>
        <img src={skills} alt="skills" className="md:max-w-xl md:py-10" />
      </div>
    </div>
  );
};

export default Habilidades;
