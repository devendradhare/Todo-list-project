import styles from "./TodoList.module.css";
const DoneTodos = ({ todosDone, setAsIncomplete, deleteTask }) => {
  return (
    <ul>
      <h3 style={{ color: "rgb(0,255,0)" }}>uncomplete tasks</h3>
      {todosDone.length === 0 ? (
        <span className={styles.emptyTask}>no tasks is available</span>
      ) : (
        todosDone.map((el, index) => (
          <li key={index} className={styles.uncompleteTasks}>
            <span
              className={styles.deleteTasksButton}
              onClick={() => deleteTask(index, "todosDone")}
            >
              ❌
            </span>
            <span onClick={() => setAsIncomplete(index)}>❎</span>
            <span className={styles.tasksElement}>{el}</span>
          </li>
        ))
      )}
    </ul>
  );
};

export default DoneTodos;
