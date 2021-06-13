import React from "react";
import { TextField, Button, Paper } from "@material-ui/core";

// Использование ссылок в функциональном компоненте
export const AppRef = () => {
  const text = React.useRef();
  const counter = React.useRef(0);
  const [ignored, forceUpdate] = React.useReducer((x) => {
    x = x + 1;
    return x;
  }, 0);

  // const [count, setCount] = React.useState(1)

  counter.current++;

  const handleClick = () => {
    alert(text.current.value + ignored);
    forceUpdate();
    // setCount(count + 1);
    text.current.value = "";
    console.log(counter);
  };

  return (
    <Paper elevation={3}>
      <TextField label="Outlined" variant="outlined" inputRef={text} />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Показать текст в алерте
      </Button>
      <p>{counter.current}</p>
    </Paper>
  );
};

// Использование ссылок в классовом компоненте
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = React.createRef();
    this.counter = React.createRef(1);
  }

  handleClick = () => {
    alert(this.text.current.value);
    this.text.current.value = "";
    this.forceUpdate();
    console.log(this.counter);
  };

  render() {
    this.counter.current++;
    return (
      <Paper elevation={3}>
        <TextField label="Outlined" variant="outlined" inputRef={this.text} />
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Показать текст в алерте
        </Button>
        <p>{this.counter.current}</p>
      </Paper>
    );
  }
}
