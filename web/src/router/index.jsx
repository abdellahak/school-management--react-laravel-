import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import GuestLayout from "@/layouts/GuestLayout";
import StudentDashboardLayout from "@/layouts/StudentDashboardLayout";
import StudentDashboard from "@/components/student/StudentDashboard";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
  {
    element : <GuestLayout/>,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ]
  },
  {
    element : <StudentDashboardLayout/>,
    children : [
      { path: "/student/dashboard", element: <StudentDashboard /> },
    ]
  }
]);
