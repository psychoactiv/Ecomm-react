import { React, Fragment, useState } from "react";
import { Filter, ProductDisplay } from "../../components";
import "./Product.css";
export function ProductListing() {
  return (
    <Fragment>
      <div className="flex product-body-container pd-tp-2-5">
        <Filter />
        <ProductDisplay />
      </div>
    </Fragment>
  );
}
