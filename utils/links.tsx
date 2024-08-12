import { NavlinksType } from "./types";
import { AreaChart, Layers, AppWindow } from "lucide-react";

export const Navlinks: NavlinksType[] = [
  {
    href: "/createJob",
    title: "Add Job",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    href: "/allJobs",
    title: "All Jobs",
    icon: <AppWindow className="h-6 w-6" />,
  },
  { href: "/stats", title: "Stats", icon: <AreaChart className="h-6 w-6" /> },
];

export const JobStatusItem: string[] = ["pending", "interview", "declined"];

export const JobModeItem: string[] = ["full-time", "part-time", "internship"];
