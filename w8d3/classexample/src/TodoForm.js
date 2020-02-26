import React, { Component } from 'react'

export default class TodoForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    // this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({text: ''});

  }
  
  render() {
  return (
    <form onSubmit={this.handleSubmit} >
      <div className="form-group">
        <input type="text" onChange={event => this.setState({text: event.target.value})} autoFocus className="form-control" id="todo-input" placeholder="Enter a todo" value={this.state.text} />
      </div>

    </form>
        )
  }
}
