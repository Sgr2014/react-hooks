import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

// React负责控制逻辑，数据 -> VDOM
// ReactDOM VDOM -> DOM
// const user = {
//   name: 'Shary',
//   age: 18
// }
// function userMsg(user) {
//   return user.name + '的年龄是' + user.age + '岁'
// }
// const jsx = <h3>{userMsg(user)}</h3>
ReactDOM.render(<App/>, document.querySelector('#root'));