import React from "react";
import Styles from "./SideBar.module.css";
import { useSideBar } from "../contextAPI/SideBarActivate";

const SideBar = () => {
  const { setSidebar } = useSideBar();
  return (
    <>
      <section className={Styles.sideBar}>
        <h3>this is side-bar</h3>
        <ul className={Styles.sideBarUl}>
          <li onClick={() => setSidebar("today")}>🥇today</li>
          <li onClick={() => setSidebar("uncomplete")}>🥲uncomplete</li>
        </ul>
      </section>
    </>
  );
};

export default SideBar;
