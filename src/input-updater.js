
import React, { Component } from 'react';

class InputUpdater extends React.Component {
  constructor() {
    super();

    this.state = {
      a: '--'
    }
  }

render() {
   return (
      <input
        type="text"
        onChange={props.update}
      />
    )
  }
}

export default InputUpdater;
