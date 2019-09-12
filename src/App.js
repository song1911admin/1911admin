import React from 'react';
import 'style/index.less'
import { Button } from 'antd';
function App(props) {
  console.log(props)
  return (
    <div className="App">
       {props.children}
    </div>
   
  );
}

export default App;
