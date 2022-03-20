import { createContext, useState, useContext } from "react";

const SideBarBtnContext = createContext(null);

function SidebarBtnProvider({ children }) {
  const [sideBar, setSideBar] = useState(false);
  console.log(sideBar);
  function toggleSidebar(e) {
    setSideBar((sideBar) => !sideBar);
  }
  console.log(sideBar);
  return (
    <SideBarBtnContext.Provider value={{ sideBar, toggleSidebar }}>
      {children}
    </SideBarBtnContext.Provider>
  );
}

const useSideBarBtn = () => useContext(SideBarBtnContext);

export { useSideBarBtn, SidebarBtnProvider };
