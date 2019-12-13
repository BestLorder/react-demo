import React, { Component } from "react";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: "个人博客-1" },
        { cid: 456, title: "个人博客-2" },
        { cid: 789, title: "个人博客-3" }
      ]
    };
  }
  jumpLIst = () => {
    this.props.history.push("/list/666");
  };
  jumpMy = () => {
    this.props.history.push("/my");
  };
  render() {
    return (
      <ul>
        <div onClick={this.jumpLIst}>Jump LIst</div>
        <div onClick={this.jumpMy}>Jump My</div>
      </ul>
    );
  }
}

export default Index;
