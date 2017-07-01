import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      red: 0,
      blue: 0
    }

    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      // value of the input ref of the red ref of this component
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  render() {
    return (
      <div>
        <NumInput
          ref="red"
          update={this.update}
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          type="number"
          label="Red"
        />

        <NumInput
          ref="blue"
          update={this.update}
          min={0}
          max={255}
          step={0.01}
          val={+this.state.blue}
          type="range"
          label="Blue"
        />
      </div>
    )
  }
}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : ''

    return (
      <div>
        <input
          ref="inp"
          min="0"
          max="255"
          step={this.props.step}
          defaultValue={this.props.val}
          type={this.props.type}
          onChange={this.props.update}
        />
        {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App;
