import { React, Fragment, useState } from "react";
import { useFilter } from "../../contexts/Filter-context/Filter-context";
import "./Filter.css";
import { useEffect } from "react";
import { decideCategoriesBrand } from "../../utils/catogries-brand-utils";
import { useSearchParams } from "react-router-dom";

export function Filter() {
  const { dispatch, state } = useFilter();
  const [cat] = useSearchParams();

  useEffect(() => {
    decideCategoriesBrand(dispatch, cat);
  }, []);

  return (
    <Fragment>
      <aside className="fliter-options rubik-font">
        <form className="filter-form">
          <fieldset>
            <legend className="big-text">Filters</legend>
            <label
              className="change-display sub-head"
              htmlFor="price-range-inp"
            >
              Filter by price range
            </label>
            <input
              id="price-range-inp"
              type="range"
              min="2000"
              max="80000"
              value={state.PRICE}
              onChange={(e) => {
                dispatch({ type: "PRICE", payload: Number(e.target.value) });
              }}
            />
            <label className="rating-value change-display">
              ₹{state.PRICE.toLocaleString("en-US")}
            </label>
          </fieldset>
          <fieldset>
            <label
              htmlFor="category-inp"
              className="change-display sub-head mgn-tp-2 mgn-btm-1"
            >
              Categories
            </label>
            <fieldset className="mgn-btm-0-5">
              <input
                id="category-inp"
                type="checkbox"
                checked={state.TOPPROCESSOR}
                onChange={() => {
                  dispatch({ type: "TOPPROCESSOR" });
                }}
              />
              <span>Top Processor</span>
            </fieldset>
            <fieldset className="mgn-btm-0-5">
              <input
                type="checkbox"
                checked={state.GPU}
                onChange={() => {
                  dispatch({ type: "GPU" });
                }}
              />
              <span>Gaming (GPU)</span>
            </fieldset>
            <fieldset className="mgn-btm-0-5">
              <input
                type="checkbox"
                checked={state.CAMERA}
                onChange={() => {
                  dispatch({ type: "CAMERA" });
                }}
              />
              <span>Camera</span>
            </fieldset>
          </fieldset>

          <fieldset>
            <label className="change-display sub-head mgn-tp-2 mgn-btm-1">
              Sort by
            </label>
            <fieldset>
              <input
                name="sort-by-inp"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.SORTBY === "HIGHTOLOW" ? true : false}
                onChange={() => {
                  dispatch({ type: "SORTBY", payload: "HIGHTOLOW" });
                }}
              />
              <span>High to low price</span>
            </fieldset>
            <fieldset>
              <input
                name="sort-by-inp"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.SORTBY === "LOWTOHIGH" ? true : false}
                onChange={() => {
                  dispatch({ type: "SORTBY", payload: "LOWTOHIGH" });
                }}
              />
              <span>Low to high price</span>
            </fieldset>
          </fieldset>

          <fieldset>
            <label className="change-display sub-head mgn-tp-2 mgn-btm-1">
              Processor
            </label>
            <fieldset>
              <input
                name="choose-processor"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.PROCESSOR === "MEDIATEK" ? true : false}
                onChange={() => {
                  dispatch({ type: "PROCESSOR", payload: "MEDIATEK" });
                }}
              />
              <span>MediaTek</span>
            </fieldset>
            <fieldset>
              <input
                name="choose-processor"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.PROCESSOR === "SNAPDRAGON" ? true : false}
                onChange={() => {
                  dispatch({ type: "PROCESSOR", payload: "SNAPDRAGON" });
                }}
              />
              <span>SnapDragon</span>
            </fieldset>
            <fieldset>
              <input
                name="choose-processor"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.PROCESSOR === "A14 BIONIC" ? true : false}
                onChange={() => {
                  dispatch({ type: "PROCESSOR", payload: "A14 BIONIC" });
                }}
              />
              <span>A14 Bionic</span>
            </fieldset>
          </fieldset>

          <fieldset>
            <label className="change-display sub-head mgn-tp-2 mgn-btm-1">
              TYPE
            </label>

            <fieldset>
              <input
                name="choose-android"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.TYPE === "ANDROID" ? true : false}
                onChange={() => {
                  dispatch({ type: "TYPE", payload: "ANDROID" });
                }}
              />
              <span>Smart phone</span>
            </fieldset>

            <fieldset>
              <input
                name="choose-android"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.TYPE === "IOS" ? true : false}
                onChange={() => {
                  dispatch({ type: "TYPE", payload: "IOS" });
                }}
              />
              <span>IOS</span>
            </fieldset>

            <fieldset>
              <input
                name="choose-android"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.TYPE === "FEATURE PHONE" ? true : false}
                onChange={() => {
                  dispatch({ type: "TYPE", payload: "FEATURE PHONE" });
                }}
              />
              <span>Feature phone</span>
            </fieldset>
          </fieldset>

          <fieldset>
            <label className="change-display sub-head mgn-tp-2 mgn-btm-1">
              General filters
            </label>
            <fieldset className="mgn-btm-0-5">
              <input
                type="checkbox"
                value="INSTOCK"
                checked={state.INSTOCK}
                onChange={() => {
                  dispatch({ type: "INSTOCK" });
                }}
              />
              <span>In stock</span>
            </fieldset>
            <fieldset className="mgn-btm-0-5">
              <input
                type="checkbox"
                value="FAST DELIVERY"
                checked={state.FASTDELIVERY}
                onChange={() => {
                  dispatch({ type: "FASTDELIVERY" });
                }}
              />
              <span>FAST DELIVERY</span>
            </fieldset>
          </fieldset>

          <fieldset>
            <label className="change-display sub-head mgn-tp-2 mgn-btm-1">
              Ratings
            </label>
            <fieldset>
              <input
                name="choose-ratings"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.RATING === 5 ? true : false}
                onChange={() => {
                  dispatch({ type: "RATING", payload: 5 });
                }}
              />
              <span>5 stars</span>
            </fieldset>
            <fieldset>
              <input
                name="choose-ratings"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.RATING === 4 ? true : false}
                onChange={() => {
                  dispatch({ type: "RATING", payload: 4 });
                }}
              />
              <span>4 stars</span>
            </fieldset>
            <fieldset>
              <input
                name="choose-ratings"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.RATING === 3 ? true : false}
                onChange={() => {
                  dispatch({ type: "RATING", payload: 3 });
                }}
              />
              <span>3 stars</span>
            </fieldset>
            <fieldset>
              <input
                name="choose-ratings"
                className="mgn-tp-0-5"
                type="radio"
                checked={state.RATING === 2 ? true : false}
                onChange={() => {
                  dispatch({ type: "RATING", payload: 2 });
                }}
              />
              <span>2 stars</span>
            </fieldset>
          </fieldset>

          <label className="change-display sub-head mgn-tp-2 mgn-btm-1">
            BRAND
          </label>
          <fieldset className="mgn-tp-0-5">
            <input
              type="checkbox"
              value="2ram"
              checked={state.APPLE}
              onChange={() => {
                dispatch({ type: "BRAND", payload: "APPLE" });
              }}
            />
            APPLE
          </fieldset>
          <fieldset className="mgn-tp-0-5">
            <input
              type="checkbox"
              value="4ram"
              checked={state.SAMSUNG}
              onChange={() => {
                dispatch({ type: "BRAND", payload: "SAMSUNG" });
              }}
            />
            SAMSUNG
          </fieldset>
          <fieldset className="mgn-tp-0-5">
            <input
              type="checkbox"
              value="6ram"
              checked={state.VIVO}
              onChange={() => {
                dispatch({ type: "BRAND", payload: "VIVO" });
              }}
            />
            VIVO
          </fieldset>
          <fieldset className="mgn-tp-0-5">
            <input
              type="checkbox"
              value="8ram"
              checked={state.ASUS}
              onChange={() => {
                dispatch({ type: "BRAND", payload: "ASUS" });
              }}
            />
            ASUS
          </fieldset>
          <fieldset className="mgn-tp-0-5">
            <input
              type="checkbox"
              value="8ram"
              checked={state.ONEPLUS}
              onChange={() => {
                dispatch({ type: "BRAND", payload: "ONEPLUS" });
              }}
            />
            OnePlus
          </fieldset>
        </form>
      </aside>
    </Fragment>
  );
}
