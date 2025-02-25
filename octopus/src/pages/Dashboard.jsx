import React from "react";
import SideBar from "../components/Dashcomponents/SideBar";
import { Box } from "@chakra-ui/react";

import { menu, statData } from "../data/menuData";
import { lineChart, radialChart } from "../data/chartData";
import { activityData } from "../data/activityData";
import StatCard from "../components/Dashcomponents/StatCard";
import StatGraph from "../components/Dashcomponents/StatGraph";
import DistributionChart from "../components/Dashcomponents/DistributionChart";
import ActivityLog from "../components/Dashcomponents/ActivityLog";

function Dashboard() {
  return (
    <Box h="100%" direction={{ base: "column", md: "row" }} display="flex">
      <SideBar menu={menu} />

      {/* content of the dashboard */}
      <Box display="flex" h="auto" flexDirection="column">
        <StatCard statData={statData} />
        {/* charts components */}
        <Box
          display="flex"
          h="full"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex="max-content" mr="4">
            <StatGraph chartData={lineChart} />
          </Box>
          <Box flex="1">
            <DistributionChart data={radialChart} />
          </Box>
        </Box>
        {/* user activity log details component */}
        <ActivityLog actData={activityData} />
      </Box>
    </Box>
  );
}

export default Dashboard;
