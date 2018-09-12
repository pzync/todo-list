import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  state = {
    todoList: [
      { id: 1, value: "First item on my list" },
      { id: 2, value: "I second this" }
    ]
  };

  handleDelete = id => {
    const todoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({ todoList });
  };

  render() {
    return (
      <div>
        <ol>
          {this.state.todoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={this.handleDelete} />
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoList;
