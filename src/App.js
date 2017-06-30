import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// const App = () => <h1>Hello Stateless</h1>

// Share common functionality between components
// Takes in a component and returns a new component
// Replaces mixins?
// E.g., build components to specification instead of including mixins all over
// ??? Not 100% sure how this differs from mixins... more explicit, I guess?
const HigherOrderComponent = (InnerComponent) => class extends React.Component {
  constructor() {
    super()

    this.state = { count: 0 }
  }

  componentWillMount() {
    console.log("HigherOrderComponent will mount")
  }

  update() {
    this.setState({count: this.state.count+1})
  }

  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}


class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return(
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    )
  }
}

const Button = HigherOrderComponent((props) =>
  <button
    onClick={props.update}
  >
    {props.children} - {props.count}
  </button>
)

class Label extends React.Component {
  componentWillMount() {
    console.log('label will mount')
  }

  render() {
    return(
      <label
        onMouseMove={this.props.update}
      >
        {this.props.children} - {this.props.count}
      </label>
    )
  }
}

const LabelHOC = HigherOrderComponent(Label)

export default App;
