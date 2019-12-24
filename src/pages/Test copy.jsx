/**
 * 6666666666
 * 44444444444
 */
import React, { Component } from 'react';
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '1'
    };
  }
  componentDidMount() {
    console.log(123);
  }
  myClick = params => {
    this.setState({ name: 666 });
  };

  render() {
    const { name } = this.state;
    return <div onClick={this.myClick}>{name}</div>;
  }
}

export default Test;
