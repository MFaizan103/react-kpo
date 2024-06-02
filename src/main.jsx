import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Notifications from "./pages/Notifications.jsx";
import Jobs from "./pages/Jobs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import MissingPersonForm from "./components/MissingPersonForm.jsx";
import MobileSnatchingForm from "./components/MobileSnatchingForm.jsx";
import PoliceStations from "./pages/PoliceStations.jsx";
import PoliceOffices from "./pages/PoliceOffice.jsx";
import Directory from "./pages/Directory.jsx";
import ComplaintForm from "./pages/ComplainForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Notifications", element: <Notifications /> },
      {
        path: "/Jobs",
        element: <Jobs />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },

      {
        path: "/MissingPerson",
        element: <MissingPersonForm />,
      },
      {
        path: "/MobileSnatching",
        element: <MobileSnatchingForm />,
      },
      {
        path: "/PoliceStations",
        element: <PoliceStations />,
      },
      {
        path: "/PoliceOffices",
        element: <PoliceOffices />,
      },
      {
        path: "/Directory",
        element: <Directory />,
      },
      {
        path: "/ComplaintForm",
        element: <ComplaintForm />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
