/*
 * @Descripttion:
 * @Author: Lorder
 * @Date: 2020-03-31 15:06:08
 * @LastEditors: Lorder
 * @LastEditTime: 2020-03-31 16:51:14
 */
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from '@/store/actionTypes'
const defaultState = {
  inputValue: 'Write Something',
  list: ['早上4点起床，锻炼身体', '中午下班游泳一小时']
}; //默认数据
export default (state = defaultState, action) => {
  //就是一个方法函数
  console.log(action);
  switch (action.type) {
    case CHANGE_INPUT: {
      let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
      newState.inputValue = action.value;
      return newState;
    }
    case ADD_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue); //push新的内容到列表中去
      return newState;
    }
    case DELETE_ITEM: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1); //删除数组中对应的值
      return newState;
    }
    default:
      return state;
  }
};
