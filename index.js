import React from 'react'
import ReactDOM from 'react-dom'

var HelloWorld=React.createClass({
  render(){
    return(
      <div>Hello World, Hello React. </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('react-div')
)
