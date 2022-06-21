import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar/Navbar";
import AddTodo from "./Screens/AddTodo/AddTodo";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Register from "./Screens/Register/Register";
import "./Utils/index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { useHealthCheck } from "./Hooks/UseHealthCheck";
import AdminReportPage from "./Screens/Admin";
import Switch from "./Components/SwitchBox/Switch";
import { IoLogOutOutline } from "react-icons/io5";
import UseReload from "./Hooks/UseReload";
import AdminSwitch from "./Utils/AdminSwitch";

function App() {
  useHealthCheck();
  const [showAddTaskPage, setAddTaskPage] = useState(false);
  const [isAdmin, setIsAdmin] = useState<{ [k: string]: any }>({
    admin: false,
  });
  return (
    <div className="App">
      <AdminSwitch isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      {localStorage.getItem("user") && !localStorage.getItem("admin") ? (
        <>
          <Navbar setAddTaskPage={setAddTaskPage} />
          <Dashboard />
          {showAddTaskPage && <AddTodo setAddTaskPage={setAddTaskPage} />}
        </>
      ) : (
        <>
          {isAdmin.admin || localStorage.getItem("admin") ? (
            <AdminReportPage />
          ) : (
            <Register />
          )}
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>
);
