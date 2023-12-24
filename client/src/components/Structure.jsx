import { useState, useEffect, useRef } from "react";
// components
import Todos from "./Todos/Todos";
import TodosDone from "./Todos/TodosDone";
import AddNewTask from "./AddNewTask/AddNewTask";
import SideBar from "./sideBar/SideBar";
// Styles
import Styles from "./Structure.module.css";
// context
import { ContextProvider } from "./contextAPI/TodosProvider";
import { useSideBar } from "./contextAPI/SideBarActivate";

function Structure() {
  // getting todays date
  let TodaysDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
  
  const { sidebar } = useSideBar();
  console.log("Sidebar from Sidebar component = ", sidebar);

  return (
    <>
      <ContextProvider>
        <div className={Styles.main}>
          {/* <h1 className={Styles.nav}>ToDo-List</h1> */}
          <SideBar />
          <section className={Styles.display}>
            <span className={Styles.TodaysDate}>
              <span>{TodaysDate} </span>
              <span>...</span>
            </span>
            <section className={Styles._NO_CLASS_}>
              {sidebar === "today" ? <Todos /> : <TodosDone />}
              <AddNewTask />
            </section>
          </section>
        </div>
      </ContextProvider>
    </>
  );
}

export default Structure;
