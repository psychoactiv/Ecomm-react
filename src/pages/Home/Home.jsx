import { React, Fragment } from "react";
import { Banner, Categories, BestSelling, BrandShop } from "../../components";
import { CategoryProvider } from "../../contexts/Category-context/category-context";

export function Home() {
  return (
    <Fragment>
      <CategoryProvider>
        <Banner />
        <Categories />
        <BestSelling />
        <BrandShop />
      </CategoryProvider>
    </Fragment>
  );
}
