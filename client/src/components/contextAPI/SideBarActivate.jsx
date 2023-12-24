import React, { createContext, useState, useContext } from "react";

const SideBarActivateContext = createContext(null);

export const useSideBar = () => {
  return useContext(SideBarActivateContext);
};

export const SideBarActivate = (props) => {
  const [sidebar, setSidebar] = useState("today");
  return (
    <SideBarActivateContext.Provider value={{ sidebar, setSidebar }}>
      {props.children}
    </SideBarActivateContext.Provider>
  );
};
