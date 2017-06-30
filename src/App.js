import React, { Component } from 'react';

// const App = () => <h1>Hello Stateless</h1>

class App extends React.Component {
  render() {
    // return React.createElement('h1', null, 'Hello Eggheads');
    // Null is where Props would be passed
    let text = this.props.text;
    return (

      <div>
        <h1>Class Component</h1>
        <h2>Subtitle</h2>
        <p>Description paragraph: {text}</p>
      </div>
    );
  }
}

App.propsTypes = {
  text: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired
}

export default App;
