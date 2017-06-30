import React, { Component } from 'react';
// const App = () => <h1>Hello Stateless</h1>

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    let text = "Dog";
    return (
      <Title text={text}/>
    );
  }
}

const Title = (props) => <h1>{props.text}</h1>

Title.propsTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`Missing ${propName} in props`)
    }
    if(props[propName].length < 6) {
      return new Error(`${propName} must be 6 or more characters`)
    }
  }
}

App.propsTypes = {
  text: React.PropTypes.string.isRequired
}

export default App;
