import React from "react";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import SalesChart from "../components/organisms/SalesChart";

const DashboardPage = () => {
  return (
    <DashboardTemplate>
      <SalesChart />
    </DashboardTemplate>
  );
};

export default DashboardPage;
