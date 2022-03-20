import { React, Fragment } from "react";
import "./footer.css";
export function StoreFooter() {
  return (
    <Fragment>
      <footer class="e-comm-foot">
        <div class="flex col-gap-2 flex-wrap jc-center">
          <div class="flex flex-direct-col footer-links">
            <div class="head-font">Socials</div>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">github</a>
          </div>

          <div class="flex flex-direct-col footer-links">
            <div class="head-font">Offline store</div>
            <a href="#">Mumbai</a>
            <a href="#">Bengaluru</a>
            <a href="#">Delhi</a>
          </div>

          <div class="flex flex-direct-col footer-links">
            <div class="head-font">Contacts</div>
            <a href="#">+910000000000</a>
            <a href="#">PhoneStop33PhoneStop@jmail.com</a>
          </div>

          <div class="flex flex-direct-col footer-links">
            <div class="head-font">Credits</div>
            <a href="#">Ice Cream UI</a>
            <a href="#">FontAwesome</a>
            <a href="#">pexels</a>
          </div>
        </div>

        <div class="disclaimer-footer rubik-font">
          <div>
            This project's sole purpose is of being a Portfolio website no
            brands and items listed are being provided, peace ✌
          </div>
          <div>Made with ❤</div>
          <div>© 2022 PhoneStop</div>
        </div>
      </footer>
    </Fragment>
  );
}
