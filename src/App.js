import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Cart, ProductListing, Wishlist, Login, Signup } from "./pages";
import { Navbar, StoreFooter, Sidebar } from "./components";
import { useSideBarBtn } from "./contexts/sidebar-btn-context/sidebar-btn-context";
import MockMan from "mockman-js";

function App() {
  const { sideBar } = useSideBarBtn();
  return (
    <div className="App">
      <div className="flex flex-direct-col jc-sb create-space">
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <main className={`${sideBar ? "openSidebar" : "closeSidebar"} `}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mockman" element={<MockMan />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/products" element={<ProductListing />} />
        </Routes>
        <StoreFooter />
      </div>
    </div>
  );
}

export default App;
