import React from "react";
import SideBar from "../components/Dashcomponents/SideBar";
import { Box } from "@chakra-ui/react";

import { menu, statData } from "../data/menuData";
import StatCard from "../components/Dashcomponents/StatCard";

function Dashboard() {
  return (
    <Box w="100%" h="100vh" direction="row" display="flex">
      <SideBar menu={menu} />
      <StatCard statData={statData} />
    </Box>
  );
}

export default Dashboard;
