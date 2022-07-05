import React from "react";
import logoPrincipal from "../assets/img/base/logo.png";

const Header = () => {
  return (
    <div className="boxLogo" id="inicio">
      <img src={logoPrincipal} alt="LogoPrincipal" className="imgLogo" />
    </div>
  );
};

export default Header;
