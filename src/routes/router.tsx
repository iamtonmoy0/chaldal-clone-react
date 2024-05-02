import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
