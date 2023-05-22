import React from "react";
import "../graphcard/GraphCard.css";

const GraphCard = ({ src }) => {
  return (
    <div className="card cardg">
      <div className="card-body">
        <div id="graphCardBody">
          <div className="graph-card-text-container">
            <h5
              style={{
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "0.9375rem",
                marginBottom: "1rem",
              }}
            >
              Main wallet
            </h5>
            <h6 className="graph_card_amount">₹ 30,000</h6>
          </div>
          <div className=" graph-card-image-container">
            <img
              src={src}
              alt="not"
              class="card-image d-none d-lg-block d-xl-block
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
