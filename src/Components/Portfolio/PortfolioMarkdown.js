const React = require("react");
const ReactDOM = require("react-dom");
const ReactMarkdown = require("react-markdown");

import EnvironmentalChamber from "./markdown/EnvironmentalChamber.md";
const input = "# This is a header\n\nAnd this is a paragraph";

const PortfolioMarkdown = ({ projectId }) => {
  console.log(projectId);
  if (projectId === "EnvironmentalChamber") {
    return (
      <section id="about">
        <ReactMarkdown source={EnvironmentalChamber} />
      </section>
    );
  } else {
    console.log(match);
    return <></>;
  }
};

export default PortfolioMarkdown;
