import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="App">
            <h2>ToDo List</h2>
            <TodoList />
          </div>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default App;
