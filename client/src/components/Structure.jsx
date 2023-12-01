import { useState, useEffect, useRef } from "react";
// components
import Todos from "./Todos/Todos";
import TodosDone from "./Todos/TodosDone";
import AddNewTask from "./AddNewTask/AddNewTask";
// styles
import styles from "./Structure.module.css";
// context
import { ContextProvider } from "./contextAPI/TodosProvider";

function Structure() {
  return (
    <>
      <ContextProvider>
        <div className={styles.main}>
          <h1 className={styles.nav}>ToDo-List</h1>
          <section className={styles.contant}>
            <section className={styles.makeItCenter}>
              <Todos />
              <TodosDone />
            </section>
          </section>
          <AddNewTask />
        </div>
      </ContextProvider>
    </>
  );
}

export default Structure;
