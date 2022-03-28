import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import "./components/navbar/navbar";
import { SidebarBtnProvider } from "./contexts/sidebar-btn-context/sidebar-btn-context";
import { FilterProvider } from "./contexts/Filter-context/Filter-context";
import { CartContextProvider } from "./contexts/Cart-context/cart-context";
import { WishlistProvider } from "./contexts/wishlist-context/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <WishlistProvider>
          <FilterProvider>
            <SidebarBtnProvider>
              <App />
            </SidebarBtnProvider>
          </FilterProvider>
        </WishlistProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
