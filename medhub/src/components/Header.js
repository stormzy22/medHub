import Minmenu from "./minmenu/Minmenu";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="socials">
        <div>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <header className="header">
        <div className="logo">
          <Link to="/">Logo</Link>
          <div className="menu" onClick={() => setMenu(!menu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* -------------------------------- */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="j-btn">
            <Link to="/join">Join</Link>
          </li>
        </ul>
      </header>
      {/* --------------------------------- */}
      {menu ? <div className="min-menu">{<Minmenu />}</div> : ""}
    </>
  );
};

export default Header;
