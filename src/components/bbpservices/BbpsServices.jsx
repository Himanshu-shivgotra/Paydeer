import React, { useState } from "react";
import "../bbpservices/BbpsServices.css";
import happyIcon from "../../svg/happy_icon.svg";

const BarGraph = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCardHidden, setIsCardHidden] = useState(true);

  const handleClick = () => {
    setIsCardHidden(!isCardHidden);
    setIsExpanded(!isExpanded);
    console.log("Button clicked!");
  };

  return (
    // <div className="container">
    //   <div className="card1-group my-3">
    <div className="card card_bbps">
      <div className="card-body d-flex ">
        {/* Render cards */}
        {/* Card 1 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          {/* <i className="bi bi-currency-rupee fs-5"></i> */}
          <img src={happyIcon} alt="" />

          <p className="card-title">Money Transfer</p>
        </div>
        {/* Card 2 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">X-DMT</p>
        </div>
        {/* Card 3 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">UPI Transfer</p>
        </div>
        {/* Card 4 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">Payout</p>
        </div>
      </div>

      <div className="card-body d-flex flex-row">
        {/* Render cards */}
        {/* Card 1 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">Money Transfer</p>
        </div>
        {/* Card 2 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">X-DMT</p>
        </div>
        {/* Card 3 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">UPI Transfer</p>
        </div>
        {/* Card 4 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">Payout</p>
        </div>
      </div>

      <div className="card-body d-flex flex-row">
        {/* Render cards */}
        {/* Card 1 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">Money Transfer</p>
        </div>
        {/* Card 2 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">X-DMT</p>
        </div>
        {/* Card 3 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">UPI Transfer</p>
        </div>
        {/* Card 4 */}
        <div className="d-flex flex-column justify-content-center align-items-center mx-4">
          <i className="bi bi-currency-rupee fs-5"></i>
          <p className="card-title">Payout</p>
        </div>
      </div>

      {/* Render the additional cards when the "See All" button is clicked */}
      {!isCardHidden && (
        <div>
          <div className="card-body d-flex flex-row">
            {/* Additional cards */}
            {/* Card 5 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">Money Transfer</p>
            </div>
            {/* Card 6 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">X-DMT</p>
            </div>
            {/* Card 7 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">UPI Transfer</p>
            </div>
            {/* Card 8 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">Payout</p>
            </div>
          </div>
          <div className="card-body d-flex flex-row">
            {/* Additional cards */}
            {/* Card 5 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">Money Transfer</p>
            </div>
            {/* Card 6 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">X-DMT</p>
            </div>
            {/* Card 7 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">UPI Transfer</p>
            </div>
            {/* Card 8 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">Payout</p>
            </div>
          </div>
          <div className="card-body d-flex flex-row">
            {/* Additional cards */}
            {/* Card 5 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">Money Transfer</p>
            </div>
            {/* Card 6 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">X-DMT</p>
            </div>
            {/* Card 7 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">UPI Transfer</p>
            </div>
            {/* Card 8 */}
            <div className="d-flex flex-column justify-content-center align-items-center mx-4">
              <i className="bi bi-currency-rupee fs-5"></i>
              <p className="card-title">Payout</p>
            </div>
          </div>
        </div>
      )}

      {/* "See All" button */}
      <div className="d-flex flex-column justify-content-center align-items-center mx-4">
        {!isExpanded ? (
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "#18939B",
              color: "white",
              padding: "0.313rem 0.625rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
            }}
          >
            See All
          </button>
        ) : (
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "#18939B",
              color: "white",
              padding: "0.313rem 0.625rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
            }}
          >
            Hide
          </button>
        )}
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default BarGraph;
