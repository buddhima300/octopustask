import React from "react";
import SideBar from "../components/Dashcomponents/SideBar";
import { Box } from "@chakra-ui/react";
import {
  Clipboard,
  Database,
  LayoutDashboard,
  Library,
  Store,
} from "lucide-react";

function Dashboard() {
  const menu = [
    {
      name: "Dashboard",
      href: "#",
      icon: <LayoutDashboard color="white" />,
    },
    {
      name: "Data Lab",
      href: "#",
      icon: <Database color="white" />,
    },
    {
      name: "Surveys",
      href: "#",
      icon: <Clipboard color="white" />,
    },
    {
      name: "Library",
      href: "#",
      icon: <Library color="white" />,
    },
    {
      name: "Marketplace",
      href: "#",
      icon: <Store color="white" />,
    },
  ];

  return (
    <Box w="100%" h="100vh">
      <SideBar menu={menu} />
    </Box>
  );
}

export default Dashboard;
