import React, { Component } from 'react';
import InputUpdater from './input-updater';
// const App = () => <h1>Hello Stateless</h1>
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = { a: '--' }

    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      a: ReactDOM.findDOMNode(this.a).value,
      b: this.refs.b.value
    })
  }

  render() {
    let text = "Dog";
    return (
      <div>
        <InputUpdater
          ref={ component => this.a => component }
          update={this.update}
        />
        <h1>{this.state.a}</h1>
        <hr/>
        <input type="text"
          ref='b'
          onChange={this.update}
        />
        <h1>{this.state.b}</h1>
      </div>
    );
  }
}

App.propsTypes = {
  text: React.PropTypes.string.isRequired
}

export default App;
