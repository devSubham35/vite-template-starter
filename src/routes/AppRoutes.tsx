import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Settings } from "../pages/Settings";
import { DashboardLayout } from "../layouts/DashboardLayout";
import RegularWorkerList from "../features/user/RegularWorkerList";
import FreelanceWorkerList from "../features/user/FreelanceWorkerList";
import InvestorList from "../features/user/InvestorList";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect from root to /dashboard/home */}
      <Route path="/" element={<Navigate to="/dashboard/home" replace />} />

      {/* Dashboard layout with nested pages */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Redirect index /dashboard → /dashboard/home */}
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* User routes under /users */}
      <Route path="/users" element={<DashboardLayout />}>
        <Route path="workerList/regular-worker-list" element={<RegularWorkerList />} />
        <Route path="workerList/freelance-worker-list" element={<FreelanceWorkerList />} />
        <Route path="investor-list" element={<InvestorList />} />
      </Route>

      {/* Optional: 404 Page */}
      <Route path="*" element={<div className="p-8 text-white">404 - Page Not Found</div>} />
    </Routes>
  );
};
