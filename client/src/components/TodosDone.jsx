import { useState } from "react";
import styles from "./TodoList.module.css";
const DoneTodos = ({ todosDone, setAsIncomplete, deleteTask }) => {
  const [showDeleteBtn, setDeleteBtn] = useState(-1);
  const handleOnMouseOver = (index) => {
    setDeleteBtn(index);
  };
  return (
    <ul>
      <h3 style={{ color: "rgb(0,255,0)" }}>uncomplete tasks</h3>
      {todosDone.length === 0 ? (
        <span className={styles.emptyTask}>no tasks is available</span>
      ) : (
        todosDone.map((el, index) => (
          <li
            key={index}
            className={styles.uncompleteTasks}
            onClick={() => {
              handleOnMouseOver(index);
            }}
            onMouseOver={() => {
              handleOnMouseOver(index);
            }}
            onMouseOut={() => setDeleteBtn(-1)}
          >
            <span
              className={styles.deleteTasksButton}
              onClick={() => deleteTask(index, "todosDone")}
              style={{
                visibility: showDeleteBtn === index ? "visible" : "hidden",
              }}
            >
              ❌
            </span>
            <span onClick={() => setAsIncomplete(index)}>❎</span>
            <span className={styles.tasksElement}>
              <s>{el}</s>
            </span>
          </li>
        ))
      )}
    </ul>
  );
};

export default DoneTodos;
