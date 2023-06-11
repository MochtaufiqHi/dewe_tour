import PaymentDate from "../components/Payment/PaymentDate"
import PaymentItem from "../components/Payment/PaymentItem"
import PaymentData from "../components/Payment/PaymentData"
import PaymentButton from "../components/Payment/PaymentButton"


function Payment() {
  return(
    <>
      <div className="container mt-5">
          <PaymentDate />
      </div>
    </>
  ) 
}

export default Payment