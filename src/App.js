import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// const App = () => <h1>Hello Stateless</h1>

class App extends React.Component {
  constructor() {
    super();

    this.state = { val: 0 }

    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({ val: this.state.val + 1 })
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  render() {
    console.log("rendered")
    return <button onClick={this.update}>{this.state.val}</button>
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>unMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
