import { useState } from "react";
// components
import List from "./List";
// style
import styles from "./TodoList.module.css";
// context
import { useTodos } from "../contextAPI/TodosProvider";

const DoneTodos = () => {
  const { todosDone } = useTodos();
  const [activate, setActivate] = useState(-1);
  const [showDeleteBtn, setDeleteBtn] = useState(-1);
  const handleOnMouseOver = (index) => {
    setDeleteBtn(index);
  };
  return (
    <ul onMouseOut={() => setActivate(-1)}>
      <h3 style={{ color: "rgb(0,255,0)" }}>uncomplete tasks</h3>
      {todosDone.length === 0 ? (
        <span className={styles.emptyTask}>no tasks is available</span>
      ) : (
        <List activate={activate} setActivate={setActivate} list="todosDone" />
      )}
    </ul>
  );
};

export default DoneTodos;
