import React, { Component } from 'react';
import { getUrlParam } from '@/utils/util';
import { connect } from 'react-redux'; //引入连接器
import { Button,List } from 'antd-mobile';
import {
  changeInputAction,
  addItemAction
} from '@/store/actionCreators';
const Item = List.Item;
const query = getUrlParam();

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }

  componentDidMount() {
    console.log(query);
    console.log(this.props);
    // let tempId = this.props.match.params.id;
    // this.setState({ id: tempId });
    // this.props.history.push("/my/");
  }
  jump() {
    // this.setState({ a: 2 });
    // console.log(this.state.a);
    //   setTimeout(()=>{
    //     console.log(this.state.a)
    //   },0)
    // this.props.history.push("/my/");
  }

  render() {
    return (
      <>
        <h2 onClick={()=>{this.props.changeInputAction('1111')}}>{this.props.inputValue}</h2>
        <Button type="primary" onClick={this.props.addItemAction}>
          增加
        </Button>
        <List renderHeader={() => 'Basic Style'} className="my-list">
          {this.props.list.map((item, index) => {
            return (
              <Item
                key={index + item}
              >
                {item}
              </Item>
            );
          })}
        </List>
      </>
    );
  }
}

export default connect(
  state => ({
    inputValue: state.inputValue,
    list:state.list,
  }),
  // dispatch => {
  //   return {
  //     jump() {
  //       let action = {
  //         type: 'changeInput',
  //         value: '123'
  //       };
  //       dispatch(action);
  //     },
  //     clickBtn(){
  //       let action = {
  //         type: 'addItem',
  //       };
  //       dispatch(action);
  //     }
  //   };
  // }
  {changeInputAction,addItemAction}
)(Index);
