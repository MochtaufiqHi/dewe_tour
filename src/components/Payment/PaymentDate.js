import imglogo from '../../assets/Icon2.png'

function PaymentDate() {
  return(
    <>
      <div className='container'>
        <div className="d-flex justify-content-between">
          <div className='d-flex mx-5 my-2'>
            <img src={imglogo} alt="..." style={{objectFit:"contain"}}/>
          </div>
          <div className='mx-5 my-2' style={{textAlign:"end"}}>
            <p className='mb-1' style={{fontWeight:"800", fontSize:"36px"}}>Booking</p>
            <p style={{fontWeight:"300", fontSize:"18px", color:"#878787"}}><span style={{fontWeight:"900"}}>Saturday</span>, 22 July 2023</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDate