import React from "react";

const Skill = ({ title, logo }) => {
  return (
    <div>
      <div className="skillBox mb-20">
        <img src={logo} alt="logo" className="w-28" />
        <h2 className="skillTitle">{title}</h2>
      </div>
    </div>
  );
};

export default Skill;
