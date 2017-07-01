```js

'use strict';

var App = function App(props) {
  var myStyle = {
    color: 'red'
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { style: myStyle },
      'Foo'
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'a',
        {
          onClick: update,
          href: '#'
        },
        'link text here'
      ),
      i > 1 ? 'more' : 'less',
      i > 1 && 'more than one',
      '/* Comment here */'
    )
  );
};

```
