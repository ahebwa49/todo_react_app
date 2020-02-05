import React from "react";
import Todo from "./Todo";

let id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ""
    };
  }

  handleTodoChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit() {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: this.state.todo, id: id++, checked: false }
      ],
      todo: ""
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            text: todo.text,
            id: todo.id,
            checked: !todo.checked
          };
        } else {
          return todo;
        }
      })
    });
  }

  render() {
    const todosRender = this.state.todos.map(todo => (
      <Todo
        todo={todo}
        removeTodo={() => this.removeTodo(todo.id)}
        toggleTodo={() => this.toggleTodo(todo.id)}
      />
    ));
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Enter todo</h3>
        <input
          type="text"
          value={this.state.todo}
          onChange={e => this.handleTodoChange(e)}
        />
        <br />
        <br />
        <button onClick={() => this.handleSubmit()}>submit</button>
        <br />
        <br />
        {todosRender}
        <br />
        <br />
        Todos:{this.state.todos.length}
        <br />
        Checked todos: {this.state.todos.filter(todo => todo.checked).length}
      </div>
    );
  }
}

export default App;
