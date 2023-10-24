import React, { useState } from 'react'; // Proper import statement for React
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={handleclick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active":"nav-menu "}>
        {Menuitems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        )
        )}
        <button>Sign up</button>
      </ul>
    </nav>
  );
}

export default Navbar;

