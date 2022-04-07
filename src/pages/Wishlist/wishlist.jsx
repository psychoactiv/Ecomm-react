import { React, Fragment } from "react";
import { WishListCard } from "../../components";

export function Wishlist() {
  return (
    <Fragment>
      <Fragment>
        <h1 class="mgn-1 text-center font-h1 head-font">My Wishlist</h1>
        <div class="flex flex-wrap jc-center col-gap-2 mgn-2 row-gap-2">
          <WishListCard />
        </div>
      </Fragment>
    </Fragment>
  );
}
