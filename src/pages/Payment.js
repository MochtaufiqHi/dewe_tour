import PaymentDate from "../components/Payment/PaymentDate"
import PaymentItem from "../components/Payment/PaymentItem"
import PaymentData from "../components/Payment/PaymentData"
import PaymentButton from "../components/Payment/PaymentButton"


function Payment({ payment }) {
  return(
    <>
      <div className="container mt-5">
        <div className="border border-dark rounded">
          <PaymentDate />
          <PaymentItem />
          <PaymentData payment={payment} />
        </div>
          <PaymentButton />
      </div>
    </>
  ) 
}

export default Payment