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
