import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";

const Sign = () => {
  return (
    <div class="flex flex-wrap mgn-tp-1 contain-all-account-page">
      <div class="flex flex-direct-col row-gap-2 img-account-whole-container">
        <h2 class="rubik-font text-center blue-color800 account-img-head mgn-tp-1">
          Let's get you logged to awesomeness
        </h2>
        <div class="responsive-account-img-container">
          <img
            src="Assets\Images\undraw_unlock_-24-mb.svg"
            class="responsive-account-img"
          />
        </div>
      </div>

      <div class="rubik-font flex jc-center flex-direct-col account-user-input-container">
        <form class="account-container-centering">
          <h2 class="blue-color600 mgn-lt-0-5">Login</h2>
          <label class="input-validation-conatiner">
            <input type="text" class="user-input-validation" required />
            <div class="input-placeholder">Enter your E-MAIL</div>
            <i class="fas fa-envelope input-last-side-icon"></i>
          </label>
          <label class="input-validation-conatiner">
            <input type="password" class="user-input-validation" required />
            <div class="input-placeholder">Enter your Password</div>
            <i class="fas fa-eye input-last-side-icon"></i>
          </label>
          <div class="flex jc-sb mgn-tp-1">
            <div>
              <input type="checkbox" value="Remember" />
              <span>Remember me</span>
            </div>
            <Link to="/forgot" class="account-link-style">
              forgot password?
            </Link>
          </div>

          <button value="submit" class="account-submit-btn mgn-btm-1">
            Login
          </button>
          <Link to="/signup" class="account-link-style">
            Create new account
          </Link>
          <div class="mgn-tp-1">
            By creating an account or logging in, you agree with PhoneStop's
            <Link to="#" class="account-link-style">
              Terms and Conditions
            </Link>
            and
            <Link to="#" class="account-link-style">
              Privacy Policy.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Sign };
