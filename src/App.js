import React from 'react';
import logo from './logo.svg';
import './App.css';
const name='bob'
function Name(props) {
  return <h1>网站名称：{props.name}</h1>;
}
function handleClick(e) {
  // e.preventDefault();
  console.log('链接被点击');
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={handleClick}>
          Hello,{name},{this.state.loading}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Name name="Hello World" />
      </header>
    </div>
  );
}

export default App;
