import { useState } from "react";
import "./navbar.css";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  
  const handleMenuButton = () => {
    setOpenMenu(!openMenu);
  };
 

  return (
    <header className="navbarContent">
    <div className="navbarInfo">
      <h1 className="title">My Library</h1>
      <button
        className={`spanMenuButton ${openMenu ? "open" : ""}`}
        onClick={handleMenuButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
      <nav className={`navMenu ${openMenu ? "open" : ""}`}>
        <ul className="menuList">
          <li className="menuItem">
            <a href="#">Mi estantería</a>
          </li>
          <li className="menuItem">
            <a href="#">Biblioteca</a>
          </li>
          <li className="menuItem">
            <a href="#">Iniciar Sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
