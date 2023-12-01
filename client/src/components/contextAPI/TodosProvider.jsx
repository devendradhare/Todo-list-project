import { createContext, useContext, useState, useEffect, useRef } from "react";

const TodosContext = createContext(null);

export const useTodos = () => {
  return useContext(TodosContext);
};

export const ContextProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    let arr = localStorage.getItem("todos");
    if (!arr) arr = [];
    else arr = JSON.parse(arr);
    return arr;
  });
  const [todosDone, setTodosDone] = useState(() => {
    let arr = localStorage.getItem("todosDone");
    if (!arr) arr = [];
    else arr = JSON.parse(arr);
    return arr;
  });
  const [input, setInput] = useState("");
  const [isUpdating, setIsUpdating] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("todosDone", JSON.stringify(todosDone));
  }, [todos, todosDone]);

  // function to add a new task
  const addTask = () => {
    console.log(todos);
    if (!input) return;
    setTodos([...todos, { text: input, repeate: "" }]);
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

  // function to update the task
  const updateTask = (index, calledFrom) => {
    let arr = calledFrom === "todos" ? todos : todosDone;
    setIsUpdating({ index, calledFrom });
    setInput(arr[index].text);
    inputRef.current.focus();
  };
  const updateTask1 = () => {
    let arr = isUpdating.calledFrom === "todos" ? todos : todosDone;
    let updatingThis = arr[isUpdating.index];
    updatingThis.text = input;
    arr[isUpdating.index] = updatingThis;

    if (isUpdating.calledFrom === "todos") {
      setTodos([...arr]);
    } else {
      setTodosDone([...arr]);
    }
    setIsUpdating({});
    // console.log("input", input);
    setInput("");
  };

  // function to make the task repeat
  const repeatTask = (index) => {};
  return (
    <TodosContext.Provider
      value={{
        todos,
        todosDone,
        deleteTask,
        setAsComplete,
        setAsIncomplete,
        updateTask,
        input,
        setInput,
        addTask,
        isUpdating,
        updateTask1,
        inputRef,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};
