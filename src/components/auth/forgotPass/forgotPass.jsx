import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";

const ForgotPass = () => {
  return (
    <div className="flex flex-wrap mgn-tp-1 contain-all-account-page">
      <div className="flex flex-direct-col row-gap-2 img-account-whole-container">
        <h2 className="rubik-font text-center blue-color800 account-img-head mgn-tp-1">
          Forgot password? Reset it we'll send you E-mail for authentication
        </h2>
        <div className="responsive-account-img-container">
          <img
            src="Assets\Images\undraw_access_account_re_8spm.svg"
            className="responsive-account-img"
          />
        </div>
      </div>

      <div className="rubik-font flex jc-center flex-direct-col account-user-input-container">
        <form className="account-container-centering mgn-tp-1">
          <h2 className="blue-color600 mgn-lt-0-5">Enter Details</h2>
          <label className="input-validation-conatiner">
            <input type="text" className="user-input-validation" required />
            <div className="input-placeholder">Enter your Email</div>
            <i className="fas fa-envelope input-last-side-icon"></i>
          </label>
          <label className="input-validation-conatiner">
            <input type="password" className="user-input-validation" required />
            <div className="input-placeholder">Enter your New Password</div>
            <i className="fas fa-eye input-last-side-icon"></i>
          </label>
          <label className="input-validation-conatiner">
            <input type="password" className="user-input-validation" required />
            <div className="input-placeholder">New Password Again</div>
            <i className="fas fa-eye input-last-side-icon"></i>
          </label>
          <div className="flex jc-sb mgn-tp-1">
            <div>
              <input type="checkbox" value="Remember" />
              <span>Remember me</span>
            </div>
          </div>

          <button value="submit" className="account-submit-btn mgn-btm-1">
            RESET PASSWORD
          </button>
          <Link to="/signup" className="account-link-style">
            Create new account
          </Link>
          <div className="mgn-tp-1">
            By creating an account or logging in, you agree with PhoneStop's
            <Link to="/" className="account-link-style">
              Terms and Conditions
            </Link>
            and
            <Link to="/" className="account-link-style">
              Privacy Policy.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ForgotPass };
