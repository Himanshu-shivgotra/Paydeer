import React from "react";
import GraphCard from "./GraphCard";
import graph1 from "../../assets/images/graph-1.svg";
import graph2 from "../../assets/images/graph-2.svg";
import graph3 from "../../assets/images/graph-3.svg";
import "./GraphCards.css";
// import graph4 from "../../assets/images/graph-4.svg";

const GraphCards = () => {
  return (
    // <div className="card-container d-flex ">
    <div className="container-fluid graph-cards-container">
      <GraphCard src={graph1} />
      <GraphCard src={graph2} />
      <GraphCard src={graph3} />
      <GraphCard src={graph1} />
    </div>
  );
};

export default GraphCards;
