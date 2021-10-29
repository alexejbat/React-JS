import React from "react";
import "./App.css";

export class AppClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  test = () => {
    console.log("test");
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.handleClick();

    document.addEventListener("click", this.test);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return {
      position: "300px",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
    if (prevState.count === 3) {
      this.handleClick();
    }
  }

  handleClick = () => {
    this.setState(
      (state) => ({ ...state, count: state.count + 1 })
    );
  };

  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.removeEventListener("click", this.test);
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    console.log("render", this.state);

    return (
      <div className="App" onClick={this.handleClick}>
        AppClass {count}
      </div>
    );
  }
}
