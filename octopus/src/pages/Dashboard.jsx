import React from "react";
import SideBar from "../components/Dashcomponents/SideBar";
import { Box } from "@chakra-ui/react";

import { menu, statData } from "../data/menuData";
import { lineChart } from "../data/chartData";
import StatCard from "../components/Dashcomponents/StatCard";
import StatGraph from "../components/Dashcomponents/StatGraph";

function Dashboard() {
  return (
    <Box w="100%" h="100vh" direction="row" display="flex">
      <SideBar menu={menu} />
      {/* content of the dashboard */}
      <Box display="flex" w="100%" h="auto" flexDirection="column">
        <StatCard statData={statData} />
        <StatGraph chartData={lineChart} />
      </Box>
    </Box>
  );
}

export default Dashboard;
