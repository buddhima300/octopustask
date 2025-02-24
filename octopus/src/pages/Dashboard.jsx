import React from "react";
import SideBar from "../components/Dashcomponents/SideBar";
import { Box } from "@chakra-ui/react";

import { menu } from "../data/menuData";

function Dashboard() {
  return (
    <Box w="100%" h="100vh">
      <SideBar menu={menu} />
    </Box>
  );
}

export default Dashboard;
