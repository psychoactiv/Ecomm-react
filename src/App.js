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
      <Navbar />
      <Sidebar />
      <main className={sideBar ? "openSidebar" : "closeSidebar"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mockman" element={<MockMan />} />
        </Routes>
      </main>
      <StoreFooter />
    </div>
  );
}

export default App;
