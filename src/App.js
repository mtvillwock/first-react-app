import React, { Component } from 'react';
// const App = () => <h1>Hello Stateless</h1>

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentEvent: '--' }

    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({currentEvent: e.type})
  }

  render() {
    let text = "Dog";
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onFocus={this.update}
          onBlur={this.update}
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

App.propsTypes = {
  text: React.PropTypes.string.isRequired
}

export default App;
