import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {name: "SpongeBob"},
      todos: [
        {
          id: 1,
          task: "Walk the Dog",
          completed: true
        },
               {
          id: 2,
          task: "Go for aa run",
          completed: false
        },
               {
          id: 3,
          task: "Get a coffee",
          completed: false
        },
      ]
    }
  }

// if we got the todos from an api call
  // componentDidMount() {
  //   axios.get('/api/todos')
  //   .then(res=>{
  //     this.setState({todos: res.data})
  //   })
  // }

  addTodo = content => {
    const newTodo = {
      id: Math.random().toString(36).substr(2,6),
      task: content,
      completed: false
    }

    this.setState({todos:[...this.state.todos, newTodo]})
  }

  deleteTodo = id => {

    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})

  }

  checkTask = id => {
    console.log("CheckTask", id)
    this.setState({todos: [...this.state.todos.map(todo => {


      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }

    })]})
  }

  render() {
    return (
      <div className="App container">
        <h1>Simple todo</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} checkTask={this.checkTask}/>
        <TodoForm addTodo={this.addTodo} />
      </div>
  );
  }

}

export default App;
