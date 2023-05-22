import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../piechartcard/Piechartcard.css";

const PieChartCard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Sample chart data
    const data = {
      datasets: [
        {
          borderWidth: 0,
          rotation: 90,
          data: [30, 70],
          backgroundColor: ["#17a7ae", "#2ad1d1"],
        },
      ],
    };

    // Chart configuration
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false, // Hide the default legend
      },
    };

    // Destroy previous chart instance if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create and render the chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "pie",
      data: data,
      options: options,
    });

    // Clean up on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="card.">
        <div className="card-body piechart__container d-flex flex-column align-items-center">
          <h5 className="piechar_card-title">All Services</h5>
          <div className="dotted-line"></div>
          <div className="piechart__section d-flex align-items-center">
            <div className="piechart">
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="chart-legend d-flex flex-column ">
              <div className="legend-item d-flex">
                <div
                  className="legend-color"
                  style={{ backgroundColor: "#2ad1d1" }}
                ></div>
                <div>
                  <h6 className="legend-label">Total Retailer Commission </h6>
                  <p className="legend-value">2845,659</p>
                </div>
              </div>
              <div className="legend-item d-flex">
                <div
                  className="legend-color"
                  style={{ backgroundColor: "#17a7ae" }}
                ></div>
                <div>
                  <h6 className="legend-label">Total Commission Earn By Me </h6>
                  <p className="legend-value">229,109</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChartCard;
