import { createContext, useState, useContext } from "react";

const SideBarBtnContext = createContext(null);

function SidebarBtnProvider({ children }) {
  const [sideBar, setSideBar] = useState(false);
  function toggleSidebar(e) {
    setSideBar((sideBar) => !sideBar);
  }
  return (
    <SideBarBtnContext.Provider value={{ sideBar, toggleSidebar }}>
      {children}
    </SideBarBtnContext.Provider>
  );
}

const useSideBarBtn = () => useContext(SideBarBtnContext);

export { useSideBarBtn, SidebarBtnProvider };
