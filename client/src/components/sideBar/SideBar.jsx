import React, { useState } from "react";
import Styles from "./SideBar.module.css";
import { useSideBar } from "../contextAPI/SideBarActivate";

const SideBar = () => {
  const { setSidebar } = useSideBar();
  const [togal, setTogal] = useState(true);
  const togalSidebar = () => {
    setTogal(!togal);
  };
  return (
    <>
      <section
        className={Styles.sideBar}
        style={{ left: togal ? 0 : "-200px" }}
      >
        <span>User_Name</span>
        <span
          className={Styles.sideBarToggleBtn}
          onClick={() => togalSidebar()}
        >
          {togal ? "❌" : "⏯️"}
        </span>
        <ul className={Styles.sideBarUl}>
          <li onClick={() => setSidebar("today")}>🥇today</li>
          <li onClick={() => setSidebar("uncomplete")}>🥲uncomplete</li>
        </ul>
      </section>
    </>
  );
};

export default SideBar;
