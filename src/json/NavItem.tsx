import { navRoutes } from './NavRoute';
import { RiDashboardHorizontalFill } from "react-icons/ri";

export const navItems = [
  {
    label: "Dashboard",
    path: navRoutes.home,
    icon: <RiDashboardHorizontalFill />,
  },
  {
    label: "Users",
    path: navRoutes.users.root,
    icon: <RiDashboardHorizontalFill />,
    children: [
      {
        label: "Worker list",
        path: "",
        icon: <RiDashboardHorizontalFill />,
        children: [
          {
            label: "Regular worker list",
            path: navRoutes.users.workerList.regularWorkerList,
          },
          {
            label: "Freelance worker list",
            path: navRoutes.users.workerList.freelanceWorkerList,
          },
        ],
      },
      {
        label: "Investor list",
        path: navRoutes.users.investorList,
        icon: <RiDashboardHorizontalFill />,
      },
    ],
  },
  {
    label: "Settings",
    path: navRoutes.settings,
    icon: <RiDashboardHorizontalFill />,
  },
];
