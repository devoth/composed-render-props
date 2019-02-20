import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const BolderRP = ({ children }) => <b>{children()}</b>;
const SmallerRP = ({ children }) => <small>{children()}</small>;
const Text = () => <p>some text</p>;
class Greeter extends React.Component {
  greet = () => console.log(`Hello ${this.props.person}`);
  render = () => {
    const { person } = this.props;
    return <>{this.props.children({ greet: this.greet, person })}</>;
  };
}

const App = () => (
  <div className="App">
    <BolderRP>{() => "text"}</BolderRP>
    <BolderRP>{() => <p>other text</p>}</BolderRP>
    <BolderRP>{() => <Text />}</BolderRP>
    <BolderRP>{Text}</BolderRP>
    <BolderRP>{() => <SmallerRP>{Text}</SmallerRP>}</BolderRP>
    <Greeter person="John">
      {({ greet, person }) => (
        <button onClick={greet}>Let's greet {person}</button>
      )}
    </Greeter>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
