import React from 'react';
import ReactDOM from 'react-dom';
//全局引入样式文件
// import 'antd/dist/antd.css';
//webpack.config.js中配置['import',{ "libraryName": "antd", style: true }],为按需引入
//项目less的版本和antd的less版本保持一致
import axios from 'utils/axios'
// import App from './App';
import RootRouter from './router'
import * as serviceWorker from './serviceWorker';
React.Component.prototype.$axios=axios
ReactDOM.render(<RootRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
