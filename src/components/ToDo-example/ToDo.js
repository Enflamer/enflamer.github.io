import React, {useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function ToDo(props) {
    const [isChecked, setIsChecked] = useState(false)

  const GreenCheckbox = withStyles({
    root: {
      color: blue[500],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  }

  return (
    <div className={isChecked? "todo-list-todo todo-list-checked" : "todo-list-todo"}>
      <FormControlLabel
        control={
          <GreenCheckbox
            name="checkedG"
            checked={isChecked}
            onChange={e => handleChange(e)}
          />
        }
        label={props.todo.title}
      />
      <button
        onClick={(e) => props.deleteTodo(e, props.todo)}
        className="todo-list-todo__delete"
      >
        &#10006;
      </button>
    </div>
  );
}
