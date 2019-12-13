import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import log from "@/assets/js/log";
log.capsule("当前环境", process.env.REACT_APP_ENV, "success");
log.capsule("当前版本", process.env.REACT_APP_VERSION, "success");
ReactDOM.render(<App/>, document.getElementById('root'));


