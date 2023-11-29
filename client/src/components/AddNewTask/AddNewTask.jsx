import { useState } from "react";
// styles
import styles from "./AddNewTask.module.css";
const AddNewTask = ({ input, setInput, addTask }) => {
  return (
    <section className={styles.inputSection}>
      <input
        className={styles.input}
        type="text"
        value={input}
        placeholder="Add new task"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button className={styles.addBtn} onClick={() => addTask()}>
        ADD
      </button>
    </section>
  );
};

export default AddNewTask;
