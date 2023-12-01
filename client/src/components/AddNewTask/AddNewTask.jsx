import { useState } from "react";
// styles
import styles from "./AddNewTask.module.css";
// context
import { useTodos } from "../contextAPI/TodosProvider";
const AddNewTask = () => {
  const {
    input,
    setInput,
    addTask,
    isUpdating,
    updateTask1,
    inputRef,
  } = useTodos();
  return (
    <section className={styles.inputSection}>
      <input
        className={styles.input}
        type="text"
        value={input}
        placeholder="Add new task"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" &&
          (Object.keys(isUpdating).length ? updateTask1() : addTask())
        }
        ref={inputRef}
      />
      <button className={styles.addBtn} onClick={() => addTask()}>
        ADD
      </button>
    </section>
  );
};

export default AddNewTask;
