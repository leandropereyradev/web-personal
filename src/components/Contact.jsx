import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div className="px-8 mt-40 mb-20" id="contacto">
      <h1 className="title">Contacto</h1>
      <p className="text-xl text-center md:text-3xl py-5">
        Gracias por visitar mi Página Web Personal
      </p>
      <p className="text-xl text-center md:text-3xl pt-5">
        ¡Contáctame para que podamos trabajar juntos!
      </p>
      <div className="flex justify-center pt-24">
        <div className="w-96 h-px bg-pink-500 mb-2"></div>
      </div>
      <div className="py-10 flex flex-row gap-5 justify-around lg:justify-center lg:gap-x-20 md:py-28">
        <a
          href="mailto:leandro-pereyra@hotmail.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdMail className="iconContact" />
        </a>
        <a
          href="https://github.com/leandropereyra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="iconContact" />
        </a>
        <a
          href="https://twitter.com/leandereyes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter className="iconContact" />
        </a>
        <a
          href="https://www.linkedin.com/in/gast%C3%B3n-leandro-pereyra-2a526588/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin className="iconContact" />
        </a>
      </div>
      <div className="flex justify-center pb-24">
        <div className="w-96 h-px bg-pink-500 mb-2"></div>
      </div>
    </div>
  );
};

export default Contact;
