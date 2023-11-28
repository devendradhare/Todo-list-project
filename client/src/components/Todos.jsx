import styles from "./TodoList.module.css";

const Todos = ({ todos, deleteTask, setAsComplete }) => {
  return (
    <ul>
      <h3 style={{ color: "red" }}>uncomplete tasks</h3>
      {todos.length === 0 ? (
        <span className={styles.emptyTask}>no tasks is available</span>
      ) : (
        todos.map((el, index) => (
          <li key={index} className={styles.uncompleteTasks}>
            <span
              className={styles.deleteTasksButton}
              onClick={() => deleteTask(index, "todos")}
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
