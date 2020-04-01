/*
 * @Descripttion: 
 * @Author: Lorder
 * @Date: 2020-03-31 16:55:06
 * @LastEditors: Lorder
 * @LastEditTime: 2020-04-01 15:57:47
 */
import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM}  from './actionTypes'
import axios from 'axios';

export const changeInputAction = (value)=>{
    return {
        type:CHANGE_INPUT,
        value
    }
}

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getTodoList = () =>{
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            console.log(data)
        })
    }
}