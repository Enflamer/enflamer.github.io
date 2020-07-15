import React from 'react';
import ToDoList from './components/ToDo-example/ToDoList'
import Page from './components/Page'
import Buhone from './components/Buhone-example/Buhone'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      {/* <ToDoList /> */}
      <Switch>
        <Route exact path='/' component={Page} />
        <Route path='/todolist' component={ToDoList} />
        <Route path='/buhone' component={Buhone}/>
      </Switch>
      {/* <Page /> */}
      </Router>
    </div>
  );
}

export default App;
