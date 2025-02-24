import {
  Clipboard,
  Database,
  LayoutDashboard,
  Library,
  Store,
} from "lucide-react";

export const menu = [
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

export const statData = [
  {
    topic: "Daily Active users",
    value: "1,051",
    date: "24 Feb 2025",
    status: "+12.5%",
  },
  {
    topic: "Monthly Active users",
    value: "1,051",
    date: "Feb 2025",
    status: "+8.5%",
  },
  {
    topic: "Daily Time Per Active users",
    value: "1,051",
    date: "24 Feb 2025",
    status: "+4.5%",
  },
];
