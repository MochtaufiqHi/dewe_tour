import imglogo from '../../assets/img/Icon2.png'

function PaymentDate() {
  return(
    <>
      <div className='container'>
        <div className="d-flex justify-content-between">
          <div className='d-flex mx-5 my-2'>
            <img src={imglogo} alt="..." className='logo'/>
          </div>
          <div className='mx-5 my-2 div-date'>
            <p className='mb-1 div-p1'>Booking</p>
            <p className='div-p2'><span style={{fontWeight:"900"}}>Saturday</span>, 22 July 2023</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDate