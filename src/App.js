import React, { Component } from 'react';

// const App = () => <h1>Hello Stateless</h1>

class App extends React.Component {
  render() {
    // return React.createElement('h1', null, 'Hello Eggheads');
    // Null is where Props would be passed
    return (
      <div>
        <h1>Class Component</h1>
        <h2>Subtitle</h2>
        <p>Description paragraph</p>
      </div>
    );
  }
}

export default App;
