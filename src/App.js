import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/todoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>ToDo List</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
