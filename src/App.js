import "./App.css";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/cart";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Wishlist } from "./pages/Wishlist/wishlist";
import { Login } from "./pages/Auth/login/login";
import { Signup } from "./pages/Auth/signup/signup";
import { Route, Routes, Link } from "react-router-dom";
import MockMan from "mockman-js";
import { Navbar } from "./components/navbar/navbar";
import { StoreFooter } from "./components/Footer/footer";
import { Sidebar } from "./components/sidebar/sidebar";
import { useSideBarBtn } from "./contexts/sidebar-btn-context/sidebar-btn-context";

function App() {
  const { sideBar, toggleSidebar } = useSideBarBtn();
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
