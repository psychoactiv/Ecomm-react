import "../navbar/navbar.css";
import "../../index";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import { useSideBarBtn } from "../../contexts/sidebar-btn-context/sidebar-btn-context";

export function Navbar() {
  const { toggleSidebar, sideBar } = useSideBarBtn();
  const { cartState } = useCartContext();
  return (
    <header
      className="flex nav-bar"
      onClick={() => (sideBar ? toggleSidebar() : null)}
    >
      <div className="flex jc-fs header-items-left">
        <i
          className="fas fa-bars  home-side-bar side-bar-ico"
          onClick={toggleSidebar}
        ></i>
        <div className="flex jc-sb head-name-links-flex">
          <div className="header-name rubik-font">
            <div className="head-phone-logo">
              <img
                className="display-spec-img"
                src="./Assets/Images/Subheading (4).png"
                alt="phone"
              />
            </div>
            PhoneStop
          </div>

          <Link to="/" className="header-links rubik-font">
            Home
          </Link>
          <Link to="/products" className="header-links rubik-font">
            Products
          </Link>
        </div>
      </div>

      <div className="header-search-box mgn-lt-auto mgn-rt-auto">
        <i className="fas fa-search header-search"></i>
        <input
          type="text"
          placeholder="search here"
          className="header-input text-center"
        />
      </div>

      <div className="header-items-right flex mgn-lt-auto jc-sa">
        <div className="header-icon-links flex flex-direct-col align-i-center">
          <Link to="/wishlist" className="flex flex-direct-col align-i-center">
            <i className="fas fa-heart header-icons"></i>
            <div className="header-ic-link-description rubik-font">
              Wishlist
            </div>
          </Link>
        </div>

        <div className="header-icon-links flex flex-direct-col align-i-center">
          <Link to="/cart" className="flex flex-direct-col align-i-center">
            <div class="icon-badge-container">
              {cartState.length ? (
                cartState.length > 9 ? (
                  <div class="icon-cart-relative-over-single-digit common-icon-cart-realtive">
                    {cartState.length}
                  </div>
                ) : (
                  <div class="icon-cart-relative-under-single-digit common-icon-cart-realtive">
                    {cartState.length}
                  </div>
                )
              ) : null}
              <i className="fas fa-cart-plus header-icons "></i>
            </div>
            <div className="header-ic-link-description rubik-font">Cart</div>
          </Link>
        </div>

        <div className="header-icon-links flex flex-direct-col align-i-center">
          <Link to="/login" className="flex flex-direct-col align-i-center">
            <i className="fas fa-user-circle header-icons"></i>
            <div className="header-ic-link-description rubik-font">Login</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
