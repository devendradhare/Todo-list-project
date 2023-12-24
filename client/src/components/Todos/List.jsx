// context
import { useTodos } from "../contextAPI/TodosProvider";
// styles
import styles from "./TodoList.module.css";
const List = ({ activate, setActivate, listName }) => {
  const {
    todos,
    todosDone,
    deleteTask,
    setAsComplete,
    setAsIncomplete,
    updateTask,
  } = useTodos();
  const list = listName === "todos" ? todos : todosDone;
  const handleOnMouseOver = (index) => {
    if (index === activate) setActivate(-1);
    else setActivate(index);
  };

  return list.map((el, index) => (
    <div
      key={index}
      // onMouseOver={() => handleOnMouseOver(index)}
      className={styles.ulItems}
      style={activate === index ? { backgroundColor: "rgb(28, 28, 28)" } : {}}
    >
      <li className={styles.uncompleteTasks}>
        <span
          style={{ color: "rgb(0,255,0)", cursor: "pointer" }}
          onClick={() => {
            listName === "todos"
              ? setAsComplete(index)
              : setAsIncomplete(index);
          }}
        >
          {listName === "todos" ? "✅" : "❎"}
        </span>
        <span className={styles.tasksElement}>{el.text}</span>
        <span
          style={{
            cursor: "pointer",
            fontWeight: "bolder",
            position: "absolute",
            right: "1%",
            rotate: "90deg",
          }}
          onClick={() => handleOnMouseOver(index)}
        >
          ...
        </span>
      </li>
      <div
        className={styles.optionsDialog}
        style={
          activate === index
            ? {
                display: "flex",
              }
            : {}
        }
      >
        <span className={styles.optionsIcon}>🛠️</span>
        <div className={styles.options}>
          <span
            className={styles.deleteTaskBtn}
            onClick={() => deleteTask(index, listName)}
          >
            ❌ delete
          </span>
          <span
            className={styles.completeTaskBtn}
            onClick={() => {
              listName === "todos"
                ? setAsComplete(index)
                : setAsIncomplete(index);
            }}
          >
            {listName === "todos" ? "✅ complete" : "❎ incomplete"}
          </span>
          <span
            className={styles.updateTaskBtn}
            onClick={() => updateTask(index, listName)}
          >
            ✏️Update
          </span>
          <span
            className={styles.updateTaskBtn}
            onClick={() => repeatTask(index)}
          >
            🔄️ repeat
          </span>
        </div>
      </div>
    </div>
  ));
};

export default List;
