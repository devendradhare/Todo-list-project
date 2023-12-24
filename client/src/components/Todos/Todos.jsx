import { useState } from "react";
import styles from "./TodoList.module.css";
// components
import List from "./List";
// context
import { useTodos } from "../contextAPI/TodosProvider";

const Todos = () => {
  const { todos } = useTodos();
  const [activate, setActivate] = useState(-1);
  return (
    <ul 
    // onMouseOut={() => setActivate(-1)}
    >
      <h3 style={{ color: "red" }}>uncomplete tasks</h3>
      {todos.length === 0 ? (
        <span className={styles.emptyTask}>no tasks is available</span>
      ) : (
        <List activate={activate} setActivate={setActivate} listName={"todos"} />
      )}
    </ul>
  );
};

export default Todos;
