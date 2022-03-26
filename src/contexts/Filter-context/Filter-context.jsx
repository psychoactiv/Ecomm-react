import axios from "axios";
import { filterReduceFn } from "../../utils/filter-reducer-fn";
import { compose, functionArr, initialFilter } from "../../utils/filterfn";

import {
  React,
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";

const FilterContext = createContext(null);
const useFilter = () => useContext(FilterContext);

function FilterProvider({ children }) {
  const [data, setData] = useState([]);
  const [load, setLoader] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        setData(res);
      } catch (err) {
        console.log(`error occured could not perform the task \n ${err}`);
      } finally {
        setLoader(false);
      }
    })();
  }, []);
  const [state, dispatch] = useReducer(filterReduceFn, initialFilter);
  function chooseStars(rate) {
    if (rate >= 4) {
      return { bg: "top-star", font: "green-star" };
    } else if (rate < 3) {
      return { bg: "light-alert-star", font: "light-red-star" };
    } else {
      return { bg: "medium-star", font: "yellow-medium-star" };
    }
  }
  const finalArr = compose(state, functionArr)(data.data?.products || data);
  return (
    <FilterContext.Provider value={{ chooseStars, dispatch, finalArr, state, load, data }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterProvider, useFilter };
