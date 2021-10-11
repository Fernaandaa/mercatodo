import React from "react";
import buyCar from '../../assets/buyCar.png'
import './Header.css'


const Header = () => {
  return (
    <>
      <nav className="menu">
        <div className="menu__items">
 
            <img src={buyCar} alt="logo" />
        
            <h2>Mercatodo</h2>
        </div>
        <div className="menu__sesion">
            <h4>Cerrar Sesión</h4>
        </div>
      </nav>
    </>
  );
};

export default Header;
