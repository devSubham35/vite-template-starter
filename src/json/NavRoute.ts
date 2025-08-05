const DASHBOARD_ROUTE = "/dashboard";
const USER_ROUTE = "/users";

export const navRoutes = {
  home: `${DASHBOARD_ROUTE}/home`,
  settings: `${DASHBOARD_ROUTE}/settings`,
  users: {
    root: USER_ROUTE,
    workerList: {
      regularWorkerList: `${USER_ROUTE}/workerList/regular-worker-list`,
      freelanceWorkerList: `${USER_ROUTE}/workerList/freelance-worker-list`,
    },
    investorList: `${USER_ROUTE}/investor-list`,
  },
};
