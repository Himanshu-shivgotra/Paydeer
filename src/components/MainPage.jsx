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
        className="  Main-dashboard"
        style={{
          width: "75vw",
        }}
      >
        <div
          className="dashboard_row-1"
          style={{
            width: "100%",
          }}
        >
          <GraphCards />
        </div>

        <div
          className="dashboard_row-2 row d-flex flex-row  justify-content-center container-fluid "
          //   className=" row d-flex flex-row  justify-content-center container-fluid "
          style={{ marginRight: "1rem" }}
        >
          <div className=" container col-8">
            <BbpsServices />
          </div>
          <div className=" container col-4">
            <PieChartCard />
          </div>
        </div>
        <div className="dashboard_row-3 d-flex flex-wrap justify-content-around">
          <BarChart />
          <Distributor />
        </div>
      </div>
    </>
  );
};

export default MainPage;
