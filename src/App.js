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
        <Route exact path='/enflamer-portfolio' component={Page} />
        <Route path='/enflamer-portfolio/todolist' component={ToDoList} />
        <Route path='/enflamer-portfolio/buhone' component={Buhone}/>
      </Switch>
      {/* <Page /> */}
      </Router>
    </div>
  );
}

export default App;
