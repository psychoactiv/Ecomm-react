import { React, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../contexts/Category-context/category-context";

export function BrandShop() {
  const { cat, isloaded } = useCategories();
  return (
    <Fragment>
      <div className="best-seller-head head-font mgn-lt-4 mgn-tp-4">
        Shop by Brand
      </div>
      <div className="flex flex-wrap mgn-tp-4 jc-sb brand-logo-container">
        {cat.data?.categories[0].brandCategories.map((item) => {
          return (
            <div className="brand-img-container" key={item.id}>
              <Link to={`./products?brand=${item.brandName}`}>
                <img
                  src={item.brandImage}
                  alt={item.brandName}
                  className="display-spec-img"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
