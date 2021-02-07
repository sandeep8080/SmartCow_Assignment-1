import react from "react";
import "./navBar.css";

import * as FaIcons from "react-icons/fa";

const NavBar = (props) => (
  <header className="navBar">
    <nav className="toolbar-nav">
      <div className='toggleButton'>
        <FaIcons.FaBars onClick={props.onToggleBtnClick} />
      </div>
      <div className="toolBar-logo">
        <a href="#">The Logo</a>
      </div>
      <div className="spacer"></div>
      <div className="toolBar-nav-items">
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> About Us</a>
          </li>
          <li>
            <a href="#"> Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
