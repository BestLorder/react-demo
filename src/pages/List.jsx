import React, { Component } from 'react';
import { getUrlParam } from '@/utils/util';
const query = getUrlParam();

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }

  render() {
    return (
      <h2 onClick={this.jump.bind(this)}>
        {' '}
        List Page {this.state.id} {this.state.a}{' '}
      </h2>
    );
  }
  componentDidMount() {
    console.log(query);
    console.log(this.props);
    // let tempId = this.props.match.params.id;
    // this.setState({ id: tempId });
    // this.props.history.push("/my/");
  }
  jump() {
    this.setState({ a: 2 });
    console.log(this.state.a);
    //   setTimeout(()=>{
    //     console.log(this.state.a)
    //   },0)

    // this.props.history.push("/my/");
  }
}

export default List;
