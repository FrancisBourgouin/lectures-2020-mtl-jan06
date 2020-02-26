import React, { Component } from "react";
import "./App.scss";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// function App() {
//   return <h1>Hello</h1>;
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Francis",
      form: { id: 1 }
    };
  }

  showName = () => console.log(this.state.name);

  componentDidMount() {
    this.showName();
    window.addEventListener("click", this.showName);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.showName);
  }

  // useEffect(() => {
  //   window.addEventListener("click", this.showName);

  //   return (() => window.removeEventListener("click", this.showName))
  // },[])

  render() {
    const { name } = this.state;
    // this.props.chickenName
    return <h1>Hello {name}</h1>;
  }
}

export default App;
