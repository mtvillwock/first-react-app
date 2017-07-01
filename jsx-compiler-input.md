```js

const App = (props) => {
  var myStyle = {
    color: 'red'
  }
  return (
    <div>
      <h1 style={myStyle}>Foo</h1>
      <p>
        <a
          onClick={update}
          href="#"
        >
          link text here
        </a>
        { i>1 ? 'more' : 'less' }
        { i>1 && 'more than one' }
        /* Comment here */
      </p>
    </div>
  )
}

```
