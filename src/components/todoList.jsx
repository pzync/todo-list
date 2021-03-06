import React, { Component } from "react";
import TodoItem from "./todoItem";
import "./todoList.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class TodoList extends Component {
  state = {
    search: "",
    todoList: [
      { id: 1, value: "First item on my list" },
      { id: 2, value: "I second this" },
      { id: 3, value: "Three's a crowd!" }
    ]
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleDelete = id => {
    const todoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({ todoList });
  };

  handleAddition = event => {
    event.preventDefault();
    let id = this.state.todoList.length + 1;
    let value = this.refs.newTodo.value;
    const todoList = this.state.todoList.concat({ id, value });
    this.setState({ todoList });
    this.refs.newTodo.value = "";
  };

  render() {
    let filteredTodos = this.state.todoList.filter(
      todo =>
        todo.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    );

    return (
      <div>
        <input
          className="searchBox"
          type="text"
          placeholder="Search.."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <ol>
          <TransitionGroup>
            {filteredTodos.map(todo => (
              <CSSTransition key={todo.id} timeout={500} classNames="todoAnim">
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={this.handleDelete}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ol>
        <form onSubmit={this.handleAddition}>
          <input
            className="addForm"
            type="text"
            placeholder="+ Add item"
            ref="newTodo"
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
