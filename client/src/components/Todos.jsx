import { useState } from "react";
import styles from "./TodoList.module.css";

const Todos = ({ todos, deleteTask, setAsComplete }) => {
  const [showDeleteBtn, setDeleteBtn] = useState(-1);
  const handleOnMouseOver = (index) => {
    setDeleteBtn(index);
  };
  return (
    <ul>
      <h3 style={{ color: "red" }}>uncomplete tasks</h3>
      {todos.length === 0 ? (
        <span className={styles.emptyTask}>no tasks is available</span>
      ) : (
        todos.map((el, index) => (
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
              onClick={() => deleteTask(index, "todos")}
              style={{
                visibility: showDeleteBtn === index ? "visible" : "hidden",
              }}
            >
              ❌
            </span>
            <span
              onClick={() => {
                setAsComplete(index);
              }}
            >
              ✅
            </span>
            <span className={styles.tasksElement}>{el}</span>
          </li>
        ))
      )}
    </ul>
  );
};

export default Todos;
