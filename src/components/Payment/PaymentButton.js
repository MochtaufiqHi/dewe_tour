import React, { useState, useContext } from 'react';
import ModalPayment from "./ModalPayment"
import { UserContext } from "../../context/useContext";
import { API } from "../../config/api";
import { useQuery } from "react-query";

function PaymentButton() {
const [modalPayment, setModalPayment] = useState(false)
const [state] = useContext(UserContext);

const handleClosePay = () => setModalPayment(false)
const handleShowPay = () => setModalPayment(true)

let { data: transUser } = useQuery("transCache", async () => {
  const response = await API.get("/transaction" + state.user.id);
  return response.data.data;
});

  return(
    <>
      {/* {transUser ? 
      <div>
        <div className="d-flex flex-row-reverse mb-5">
        <div className="justify-content-end">
          <button onClick={handleShowPay} className="mt-4 rounded border-none" style={{width:"213px", backgroundColor:"#ffaf00", color:"white", border:"none", height:"50px", marginRight:"0px"}}><p style={{fontWeight:"800", fontSize:"18px", marginBottom:"0px"}}>PAY</p></button>
        </div>
      </div>
      <ModalPayment 
        modalPayment={modalPayment}
        handleClosePay={handleClosePay}
        handleShowPay={handleShowPay}     
      />
      </div>  : <div></div>
    } */}
      <div className="d-flex flex-row-reverse mb-5">
        <div className="justify-content-end">
          <button onClick={handleShowPay} className="mt-4 rounded border-none" style={{width:"213px", backgroundColor:"#ffaf00", color:"white", border:"none", height:"50px", marginRight:"0px"}}><p style={{fontWeight:"800", fontSize:"18px", marginBottom:"0px"}}>PAY</p></button>
        </div>
      </div>
      <ModalPayment 
        modalPayment={modalPayment}
        handleClosePay={handleClosePay}
        handleShowPay={handleShowPay}     
      />
    </>
  )
}

export default PaymentButton