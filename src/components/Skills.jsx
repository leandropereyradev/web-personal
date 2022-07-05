import React from "react";
import Skill from "./Skill";
import html from "../assets/img/icons/html.png";
import css from "../assets/img/icons/css.png";
import javascript from "../assets/img/icons/javascript.png";
import react from "../assets/img/icons/react.png";
import github from "../assets/img/icons/github.png";
import tailwind from "../assets/img/icons/tailwind.png";
import wordpress from "../assets/img/icons/wordpress.png";
import git from "../assets/img/icons/git.png";

const Skills = () => {
  const skill = [
    {
      id: 1,
      title: "HTML",
      image: html,
    },
    {
      id: 2,
      title: "CSS",
      image: css,
    },
    {
      id: 3,
      title: "JavaScript",
      image: javascript,
    },
    {
      id: 4,
      title: "React.JS",
      image: react,
    },
    {
      id: 5,
      title: "WordPress",
      image: wordpress,
    },
    {
      id: 6,
      title: "GitHub",
      image: github,
    },
    {
      id: 7,
      title: "Tailwind",
      image: tailwind,
    },
    {
      id: 8,
      title: "Git",
      image: git,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:pt-14">
      {skill.map(({ id, title, image }) => (
        <div key={id}>
          <Skill title={title} logo={image} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
