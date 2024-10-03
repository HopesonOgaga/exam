import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserContextProvider from "./context/userContextProvider";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./components/registration";
const router = createBrowserRouter([
  { 
    path: "/",
    element: (
      <UserContextProvider>
        <App></App>
      </UserContextProvider>
    ),
  },
  { 
    path: "Registration",
    element: (
      <UserContextProvider>
        <Registration></Registration>
      </UserContextProvider>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
