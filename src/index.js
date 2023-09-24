//แสดงผลตรงไหน

import React from 'react';
import ReactDOM from 'react-dom';  // ตรงนี้
import './index.css';
import reportWebVitals from './reportWebVitals';
//import HelloComponent from  './components/HelloComponent'
import App from './App'

const data =(
  <h1>สวัสดี React</h1>
)


//การสร้าง Component แบบ Functional
/*function HelloComponent(){
  return <h1>สวัสดี Functional Component</h1>
}*/

//การสร้าง Component แบบ Class
/*class HelloComponent extends React.Component{
  render(){
    return<h1>Sawad dee Class Component 555</h1>
  }
}*/


/*ReactDOM.render(<HelloComponent/>,document.getElementById('root'));*/

ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();
