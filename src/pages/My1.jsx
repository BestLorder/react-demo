import React, { Component } from 'react'

class My extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1,
    }
    this.ref = React.createRef()
  }

  componentDidMount() {
    console.log('this.ref.current')
    console.log(this.ref.current)
    this.setState({ a: 2 })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps')
    console.log(nextProps)
    console.log('nextState')
    console.log(nextState)
    return true
  }

  render() {
    return (
      <div>
        <h2> Myooooo </h2> <h2> Myooooo </h2>
        <FancyButton ref={this.ref}>Click me!</FancyButton>;
      </div>
    )
  }
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

export default My
