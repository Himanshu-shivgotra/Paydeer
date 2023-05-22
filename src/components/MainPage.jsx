import React from "react";
import GraphCards from "./graphcard/GraphCards";
import BbpsServices from "./bbpservices/BbpsServices";
import PieChartCard from "./piechartcard/PieChartCard";
import Distributor from "./distributors/Distributor";
import BarChart from "./barchart/BarChart";

const MainPage = () => {
  return (
    <>
      <div
        className="container  Main-dashboard flex-wraps"
        style={{
          width: "75vw",
        }}
      >
        <div className="dashboard_row-1 d-flex">
          <GraphCards />
        </div>

        <div
          className="dashboard_row-2 d-flex "
          //   className=" row d-flex flex-row  justify-content-center container-fluid "
        >
          <BbpsServices />

          <PieChartCard />
        </div>
        <div className="dashboard_row-3 d-flex">
          <BarChart />
          <Distributor />
        </div>
      </div>
    </>
  );
};

export default MainPage;
