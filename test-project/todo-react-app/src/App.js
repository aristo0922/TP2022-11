import Todo from "./Todo";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { id: 0, title: "hello world 1", done: true },
    };
  }

  render() {
    return (
      <div className="App">
        <Todo item={this.state.item} />
      </div>
    );
  }
}

export default App;
