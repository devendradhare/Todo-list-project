import { useState } from "react";
// components
import Todos from "./Todos";
import TodosDone from "./TodosDone";
import AddNewTask from "./AddNewTask/AddNewTask";
// styles
import styles from "./Structure.module.css";

function Structure() {
  const [todos, setTodos] = useState([]);
  const [todosDone, setTodosDone] = useState([]);
  const [input, setInput] = useState("");

  // function to add a new task
  const addTask = () => {
    console.log(todos);
    if (!input) return;
    setTodos([...todos, input]);
    setInput("");
  };

  // set task as completed
  const setAsComplete = (index) => {
    var arr = todos;
    arr = arr.splice(index, 1);
    setTodosDone([...todosDone, ...arr]);
  };

  // set task as incomplete
  const setAsIncomplete = (index) => {
    var arr = todosDone;
    arr = todosDone.splice(index, 1);
    setTodos([...todos, ...arr]);
  };

  // function to delete a task using index
  const deleteTask = (index, from) => {
    if (from === "todos") {
      var arr = todos;
      arr.splice(index, 1);
      setTodos([...arr]);
      return;
    }
    var arr = todosDone;
    arr.splice(index, 1);
    setTodosDone([...arr]);
  };
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.nav}>ToDo-List</h1>
        <section className={styles.contant}>
          <section className={styles.makeItCenter}>
            <Todos
              todos={todos}
              setAsComplete={setAsComplete}
              deleteTask={deleteTask}
            />
            <TodosDone
              todosDone={todosDone}
              setAsIncomplete={setAsIncomplete}
              deleteTask={deleteTask}
            />
          </section>
        </section>
        <AddNewTask input={input} setInput={setInput} addTask={addTask} />
      </div>
    </>
  );
}

export default Structure;
