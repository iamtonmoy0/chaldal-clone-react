import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
]);

export default router;
