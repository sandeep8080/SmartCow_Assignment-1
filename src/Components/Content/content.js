import react from "react";
import "./content.css";

import Card from "../Card/card";
const Content = (porps) => {
  let contentClasses = ["content-container"];

  if (porps.expand) {
    contentClasses.push("content-container-expand");
  }

  return (
    <div className={contentClasses.join(" ")}>
      <div>
        <Card title="SERVICES" />
        <Card title="NEWS" />
        <Card title="CAREERS" />
      </div>
      <div>
        <Card title="CONTACT" />
        <Card title="SOLUTIONS" />
      </div>
    </div>
  );
};

export default Content;
