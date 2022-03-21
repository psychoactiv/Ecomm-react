import { React, Fragment } from "react";
import { Banner } from "../../components/banner/banner";
import { Categories } from "../../components/categories/categories";
import { BestSelling } from "../../components/Best-selling-product/best-selling";
import { BrandShop } from "../../components/BrandShoping/BrandShop";


export function Home() {
  return (
    <Fragment>
      <Banner />
      <Categories />
      <BestSelling />
      <BrandShop />
    </Fragment>
  );
}
