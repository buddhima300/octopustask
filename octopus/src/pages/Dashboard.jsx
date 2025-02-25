import React from "react";
import SideBar from "../components/Dashcomponents/SideBar";
import { Box } from "@chakra-ui/react";

import { menu, statData } from "../data/menuData";
import { lineChart, radialChart } from "../data/chartData";
import StatCard from "../components/Dashcomponents/StatCard";
import StatGraph from "../components/Dashcomponents/StatGraph";
import DistributionChart from "../components/Dashcomponents/DistributionChart";

function Dashboard() {
  return (
    <Box w="100%" h="100%" direction="row" display="flex">
      <SideBar menu={menu} />
      {/* content of the dashboard */}
      <Box display="flex" w="100%" h="auto" flexDirection="column">
        <StatCard statData={statData} />
        {/* charts components */}
        <Box display="flex" w="100%" h="auto" flexDirection="row">
          <Box flex="1" mr="4">
            <StatGraph chartData={lineChart} />
          </Box>
          <Box flex="1">
            <DistributionChart data={radialChart} />
          </Box>
        </Box>
        {/* user activity log details component */}
      </Box>
    </Box>
  );
}

export default Dashboard;
