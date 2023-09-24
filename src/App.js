import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import "./App.css";

function App() {
  const onAddNewItem = (newItems)=>{
    setItems((prevItems)=>{
      return [newItems,...prevItems]    /*ข้อมูลใหม่จะแทรกอยู่ด้านบน ข้อมูลเดิม */
    })}
  // const initState=[
  //   {id:1,title:"เงินเดือน",amount:20000},
  //   {id:2,title:"ค่าเช่าบ้าน",amount:-2000},
  //   {id:3,title:"ค่าเช่าบ้าน",amount:-2000},
  //   {id:4,title:"ค่าเช่าบ้าน",amount:-2000}
  // ]
  const [items,setItems] = useState([])
  const[reportIncome,setReportIncome] = useState(0)
  const[reportExpense,setReportExpense] = useState(0)

  useEffect(()=>{
    const amount = items.map(items=>items.amount)
    const income = amount.filter(element=>element>=0).reduce((total,element)=>total=total+element,0)
    const expense = amount.filter(element=>element<0).reduce((total,element)=>total=total+element,0)*-1
    console.log("total income = ",income)
    console.log("total expense = ",expense)

    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])


  return (
    <DataContext.Provider value={
      {
        income:reportIncome,
        expense:reportExpense
      }
    }>
      <div className="container">
        <h1 style={{color:"red", textAlign:"center", fontSize:'20px'}}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                {/* <a href="#">ช้อมูลบัญชี</a> */}
                <Link to="/">ช้อมูลบัญชี</Link>
              </li>
              <li>
                {/* <a href="#">บันทึกข้อมูล</a> */}
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <ReportComponent/>
              </Route>
              <Route path="/insert" exact>
                <FormComponent onAppItem={onAddNewItem}/>
                <Transaction items={items}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>


    </DataContext.Provider>

  );
}

export default App;   //นำออกไปใช้งาน
