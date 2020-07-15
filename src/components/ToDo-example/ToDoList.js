import React, { useState } from "react";
import ToDo from "./ToDo";
import "../../style/ToDoStyle/style.scss";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, purple } from "@material-ui/core/colors";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[700],
    },
  },
});

export default function ToDoList() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, title: "something", completed: false },
  ]);

  console.log(todos);

  const handleSubmit = () => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(16).slice(2),
        title: value,
        completed: false,
      },
    ]);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const deleteTodo = (e, todo) => {
    setTodos(todos.filter((item) => todo.id !== item.id));
  };

  return (
    <div className="todo-list">
      <div className="todo-list__title">TODO List</div>
      <div className='todo-list-input'>
        <ThemeProvider theme={theme}>
          <TextField
            type="input"
            id="standard-basic"
            className="todo-list-input__field"
            value={todos.title}
            onChange={(e) => handleChange(e)}
            label="Enter some text"
          />
        </ThemeProvider>
        <button className="todo-list-input__button" onClick={() => handleSubmit()}>
          Add
        </button>
      </div>

      {todos.map((todo) => (
        <ToDo
          deleteTodo={(e, todo) => deleteTodo(e, todo)}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
}
