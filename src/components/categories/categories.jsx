import { Loader } from "../../components";
import { React, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../contexts/Category-context/category-context.jsx";
import "./categories.css";

export function Categories() {
  const { cat, isloaded } = useCategories();
  return (
    <Fragment>
      {isloaded ? (
        <div>
          <h3 className="text-center category-title head-font mgn-tp-4">
            Categories
          </h3>

          <div className="products-spec-display rubik-font">
            {cat.data?.categories[0].generalCategories.map((item) => (
              <Link
                key={item.id}
                to={`./products?categories=${item.categoryName}`}
              >
                <h4 className="spec-display-head">{item.categoryName}</h4>
              </Link>
            ))}
            {cat.data?.categories[0].generalCategories.map((item) => (
              <div key={item.id} className="img-display-container">
                <Link to={`./products?categories=${item.categoryName}`}>
                  <img
                    className="display-spec-img"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
}
