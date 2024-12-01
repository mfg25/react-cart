import React, { useState } from "react";
import { Link } from "react-router-dom";
import navIcon from "../assets/nav.png";
import { useAuth } from "../../services/authService";
const Nav = () => {

  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(!toggle);
  };
  
  const {user} = useAuth()

  return (
    <nav className="header-nav">
      <div className="nav-wrapper">
        <Link to="/">
          <div className="links">HOME</div>
        </Link>
        <Link to="/produtos">
          <div className="links">PRODUTOS</div>
        </Link>
        <Link to="/informacoes">
          <div className="links">INFORMAÇÕES</div>
        </Link>

        {user ? 
        <Link to="/userAccount/user">
          <div className="links">{user.displayName}</div>
        </Link> : 
        <Link to="/login">
          <div className="links">ENTRAR</div>
        </Link>
        }
       
      </div>
      <img src={navIcon} alt="nav" className="nav-icon" onClick={changeState} />
      <div
        className="mobile-nav-wrapper"
        style={toggle ? { display: "flex" } : { display: "none" }}
      >
        <Link to="/">
          <div className="links">HOME</div>
        </Link>
        <Link to="/produtos">
          <div className="links">PRODUTOS</div>
        </Link>
        <Link to="/contato">
          <div className="links">CONTATO</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
