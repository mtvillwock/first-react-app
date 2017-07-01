import React, { Component } from 'react';

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 'None'
    }
  }

  selectItem() {
    this.setState({selected})
  }

  render() {
    let fn = child =>

    let items = React.Children.map(this.props.children, fn);
    return(
      <div>
        <h2>You have selected: {this.state.selected}</h2>
      </div>
    )
  }
}


export default App;
