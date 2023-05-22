import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../barchart/BarChart.css";

function Graph() {
  const [chartType, setChartType] = useState("month");

  const chartData = {
    above: {
      categories: ["2020", "2021", "2022", "2023"],
      series: [
        {
          name: "Retailer Commission",
          data: [20, 30, 40, 25],
        },
        {
          name: "Distributor Commission",
          data: [30, 30, 35, 30],
        },
      ],
    },
    month: {
      categories: ["week1", "week2", "week3", "week4"],
      series: [
        {
          name: "Retailer Commission",
          data: [15, 12, 30, 20],
        },
        {
          name: "Distributor Commission",
          data: [30, 25, 10, 20],
        },
      ],
    },
    year: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        {
          name: "Retailer Commission",
          data: [5, 9, 20, 8, 8, 8, 8, 8, 8, 8, 8, 8],
        },
        {
          name: "Distributor Commission",
          data: [7, 14, 15, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        },
      ],
    },
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  return (
    <div className="App">
      <div className="row">
        <div
          className=""
          style={{
            border: "1px solid bfbfbf",
            borderRadius: "20px",
            boxShadow: "-8px 3px 17px 0px",
            width: "40rem",
          }}
        >
          <div className="chart-container">
            <p className="text">Commission Report</p>
            <div className="chart-buttons">
              <button
                className="chart"
                onClick={() => handleChartTypeChange("month")}
              >
                Month |
              </button>
              <button
                className="chart"
                onClick={() => handleChartTypeChange("year")}
              >
                Year |
              </button>
              <button
                className="chart"
                onClick={() => handleChartTypeChange("above")}
              >
                Year++
              </button>
            </div>
            <Chart
              options={{
                colors: ["#c99f19", "#17a7ae"],
                xaxis: {
                  categories: chartData[chartType].categories,
                },
                yaxis: {
                  min: 0,
                  max: 38,
                },
              }}
              series={chartData[chartType].series}
              type="bar"
              width="100%"
              height="230vh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
