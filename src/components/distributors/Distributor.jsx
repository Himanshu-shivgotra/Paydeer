import React from "react";
import "./Distributor.css";
import distributerIcon from "../../svg/distributor_icon.svg";
import happyIcon from "../../svg/happy_icon.svg";
import arrowIcon from "../../svg/Arrow-icon.svg";
const Distributor = () => {
  return (
    <>
      <div className="container__distributor">
        <div className="distributor-body m-4">
          <h5 className="distributor-title">Distributors</h5>
          <div className="distributor-values d-flex justify-content-between">
            <div>
              <span className="distributor-text">761</span>
            </div>
            <div className="distributor-icon d-flex">
              <img src={distributerIcon} alt="fausers" />
            </div>
          </div>
        </div>
        <div className="distributed-dotted-line"></div>

        <div className="distributor-body m-4">
          <h5 className="distributor-title">Distributors</h5>
          <div
            className="distributor-values"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="distributor-values">
              <div className="distributor-inc">
                <span>
                  <img className="p-1" src={arrowIcon} alt="arrowIcon" />
                </span>
                +43
              </div>
              <span className="distributor-text">761</span>
            </div>
            <div className="distributor-icon d-flex mb-3">
              <img src={happyIcon} alt="fausers" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Distributor;
