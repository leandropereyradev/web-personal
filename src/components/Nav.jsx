import React from "react";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="header">
      <div>
        <p className="text-center pb-1">Desarrollador Web</p>
      </div>
      <div className="flex justify-center">
        <div className="w-52 h-px bg-pink-500 mb-2"></div>
      </div>
      <nav>
        <ul className="flex flex-row justify-around gap-8 p-1">
          <li className="linkes">
            <Link to="inicio" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>
              <IoHome
                data-toggle="tooltip"
                data-placement="top"
                title="Inicio"
              />
            </Link>
          </li>
          <li className="linkes">
            <Link to="about" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>
              <IoPerson
                data-toggle="tooltip"
                data-placement="top"
                title="Sobre mi"
              />
            </Link>
          </li>
          <li className="linkes">
            <Link to="habilidades" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>
              <GiSkills
                data-toggle="tooltip"
                data-placement="top"
                title="Habilidades"
              />
            </Link>
          </li>
          <li className="linkes">
            <Link to="portfolio" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>
              <BsBriefcaseFill
                data-toggle="tooltip"
                data-placement="top"
                title="Portfolio"
              />
            </Link>
          </li>
          <li className="linkes">
            <Link to="contacto" activeClass="active" spy={true} smooth={true} offset={-50} duration={500}>
              <IoMdContacts
                data-toggle="tooltip"
                data-placement="top"
                title="Contacto"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
