import React, { Component } from 'react';
import { Button, Heart } from './widgets';
import InputUpdater from './input-updater';
// const App = () => <h1>Hello Stateless</h1>

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      foo: "Foo state text"
    }

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ foo: e.target.value });
  }

  render() {
    // return React.createElement('h1', null, 'Hello Eggheads');
    // Null is where Props would be passed
    let text = this.props.text;
    return (

      <div>
        <h1>Class Component</h1>
        <h2>Subtitle</h2>
        <p>Description paragraph: {text}</p>
        <p>{this.state.foo}</p>

        <h3>Input</h3>
        <Button update={this.update}>
          Child of Button <Heart />
        </Button>
        <InputUpdater update={this.update}/>
      </div>
    );
  }
}



App.propsTypes = {
  text: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired
}

export default App;
