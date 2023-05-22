import React, { useState } from 'react';
import ModalPayment from "./ModalPayment"

function PaymentButton() {
const [modalPayment, setModalPayment] = useState(false)

const handleClosePay = () => setModalPayment(false)
const handleShowPay = () => setModalPayment(true)


  return(
    <>
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