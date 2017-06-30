import React from 'react';

const Button = (props) =>
  <button>{props.children}</button>;

const Heart = () =>
  <span>&hearts;</span>;


export {
  Button,
  Heart
};
