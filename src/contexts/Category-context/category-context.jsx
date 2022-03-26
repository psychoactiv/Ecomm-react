import { React, useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [cat, setCat] = useState([]);
  const [isloaded, setIsloaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/categories");
        setCat(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsloaded(true);
      }
    })();
  }, []);
  return (
    <CategoryContext.Provider value={{ cat, isloaded }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategories = () => useContext(CategoryContext);

export { useCategories, CategoryProvider };
