import { useSideBarBtn } from "../../contexts/sidebar-btn-context/sidebar-btn-context";
import { Link } from "react-router-dom";
export function Sidebar() {
  const { sideBar, toggleSidebar } = useSideBarBtn();
  return (
    <aside
      className={`${
        sideBar ? "open-side-drawer" : "close-side-drawer"
      } drawer-sidebar`}
    >
      <div
        className={`${
          sideBar ? "open-side-drawer" : "close-side-drawer"
        }-drawer-user-info`}
      >
        <div className="drawer-top-side">
          <h3>User Name</h3>
          <i className="fas fa-times" onClick={toggleSidebar}></i>
        </div>
      </div>
      <div className="drawer-content">
        <p className="drawer-line">Profile</p>
        <Link className="side-bar-link-change" to="/wishlist">
          <ul className="drawer-items general" onClick={toggleSidebar}>
            <li>
              <i className="fas fa-heart header-icons"></i>
            </li>
            <li>wishlist</li>
          </ul>
        </Link>

        <Link className="side-bar-link-change" to="/login">
          <ul className="drawer-items general" onClick={toggleSidebar}>
            <li>
              <i className="fas fa-user-circle header-icons"></i>
            </li>
            <li>Login</li>
          </ul>
        </Link>

        <Link className="side-bar-link-change" to="/cart">
          <ul className="drawer-items general" onClick={toggleSidebar}>
            <li>
              <i className="fas fa-cart-plus header-icons"></i>
            </li>
            <li>Cart</li>
          </ul>
        </Link>

        <p className="drawer-line">Navigations</p>

        <Link className="side-bar-link-change" to="/">
          <ul className="drawer-items general" onClick={toggleSidebar}>
            <li>
              <i className="fas fa-home"></i>
            </li>
            <li>Home</li>
          </ul>
        </Link>

        <Link className="side-bar-link-change" to="/products">
          <ul className="drawer-items general" onClick={toggleSidebar}>
            <li>
              <i className="fab fa-product-hunt"></i>
            </li>
            <li>Products</li>
          </ul>
        </Link>
      </div>
    </aside>
  );
}
