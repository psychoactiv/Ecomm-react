import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import "./components/navbar/navbar";
import { SidebarBtnProvider } from "./contexts/sidebar-btn-context/sidebar-btn-context";
import { FilterProvider } from "./contexts/Filter-context/Filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <SidebarBtnProvider>
          <App />
        </SidebarBtnProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
