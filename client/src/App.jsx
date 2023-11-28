import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import TodosDone from "./components/TodosDone";

function App() {
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
      <div className="main">
        <h1 className="head">ToDo-List</h1>
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
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={() => addTask()}>➕</button>
      </div>
    </>
  );
}

export default App;
