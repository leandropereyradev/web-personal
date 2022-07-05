import React from "react";
import fotoPerfil from "../assets/img/base/fotoPerfil.png";

const About = () => {
  return (
    <div className="section" id="about">
      <h3 className="title">Sobre mi</h3>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:px-10 lg:max-w-5xl lg:py-20">
        <div>
          <img src={fotoPerfil} alt="fotoPerfil" className="max-w-xs mb-10" />
        </div>
        <div className="flex flex-col max-w-2xl font-semibold tracking-wide">
          <h1 className="text-2xl mb-10">
            Soy Leandro Pereyra, Desarrollador Web
          </h1>
          <p className="text-lg leading-loose tracking-wider text-justify">
            Soy un desarrollador Front-End con experiencia en la creación de
            sitios y aplicaciones web. Autodidacta por naturaleza. Me
            especializo en React.JS y tengo experiencia profesional trabajando
            con WordPress. Siempre busco mejorar mis habilidades y seguir
            creciendo profesionalmente para poder hacer aportes valiosos en el
            grupo de trabajo del que formo parte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
