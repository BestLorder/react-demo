import React, { Component } from 'react';
import Button from '@/components/Button'
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: '个人博客-1' },
        { cid: 456, title: '个人博客-2' },
        { cid: 789, title: '个人博客-3' }
      ],
      text:'myButton',
      name:'666'
    };
  }
  jumpLIst = () => {
    this.props.history.push('/list/666');
  };
  jumpMy = () => {
    this.props.history.push('/my');
  };

  changeName = (text) => {
    console.log('changeName')
    this.setState({
      text
  })
}


  render() {
    return (
      <ul>
        <div onClick={this.jumpLIst}>Jump LIst</div>
        <div onClick={this.jumpMy}>Jump My</div>
        <Button text={this.state.text} onChange={this.changeName}></Button>
      </ul>
    );
  }
}

export default Index;
