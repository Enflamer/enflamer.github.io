import React from "react";
import "../style/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToDoList from './ToDo-example/ToDoList'

export default function Main() {
  return (
    
      <div className="main layout-max-width">
        <div className="main__title">Примеры работ</div>
        <div className="main-examples">
          <Link to='/todolist'>
            {/* </div></div><router-link :to="{name: 'buhoneMainPage'}"> */}
            <div className="main-examples-example main-examples-example__one" />
          </Link>
          <Link to='/buhone'>
          {/* </router-link> */}
          <div className="main-examples-example main-examples-example__two" />
          </Link>
        </div>
      </div>
  );
}
