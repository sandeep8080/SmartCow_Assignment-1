import react from "react";
import "./sideBar.css";
import { SideBarData } from "./sideBarData";

const SideBar = (prop) => {
  let sideBarClasses = ["sideBar"];

  if (prop.showSB) {
    sideBarClasses.push("sideBar-open");
  }
  return (
    <nav className={sideBarClasses.join(" ")}>
      <ul>
        {SideBarData.map((items, index) => {
          return (
            <li key={index} className="sideBar-text">
              <a href={items.path}>
                {items.icon}
                <span>{items.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
