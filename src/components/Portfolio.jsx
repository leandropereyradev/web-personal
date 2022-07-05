import React from "react";
import Cards from "./Cards";

const Portfolio = () => {
  return (
    <div className="section" id="portfolio">
      <h1 className="title">Portfolio</h1>
      <div className="md:pt-14">
        <Cards />
      </div>
    </div>
  );
};

export default Portfolio;
