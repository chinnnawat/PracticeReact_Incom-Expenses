import { useState,useEffect } from "react"
import "./FormComponent.css"
import { v4 as uuidv4 } from 'uuid';


const FormComponent =(props) =>{


    const inputTitle = (event)=>{
        setTitle(event.target.value) /*เก็บสิ่งที่พืมพ์*/
    }

    const inputAmount = (event)=>{
        setAmount(event.target.value)   /*เก็บสิ่งที่พืมพ์*/
    }

    /*เก็บข้อมูลชื่อรายการ*/
    const [title,setTitle] = useState('')

    /*เก็บจำนวนเงิน*/
    const [amount,setAmount] = useState(0)

    const saveItem = (event)=>{
        event.preventDefault()  /*ไม่ต้อง clear ค่าใหม่*/
        console.log("บันทึกข้อมูลเรียบร้อย")
        const itemData = {
            /*ดึงข้อมูลมาจาก state title and state amount */
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAppItem(itemData)
        setTitle("")
        setAmount(0)
    }

    const [formValid,setFormValid] = useState(false)

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการของคุณ" onChange={inputTitle} value={title}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
                {/* <div className="confirm">บันทึกข้อมูลเรียบร้อย</div> */}
            </form>
        </div>
    )
}

export default FormComponent