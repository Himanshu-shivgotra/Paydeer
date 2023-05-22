import React from "react";
import { Routes, Route } from "react-router-dom";
import WalletRequest from "./walletRequest/WalletRequest";

import MainPage from "./MainPage";

export { Routes };

const MyRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="banking" element={<WalletRequest />}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
