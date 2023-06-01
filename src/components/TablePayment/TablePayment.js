// import PaymentData from '../Payment/PaymentData'
import { useEffect, useState } from 'react'
import plus from '../../assets/img/Plus.png'
import minus from '../../assets/img/Minus.png'
import { trip } from '../../data'
import { Link } from 'react-router-dom'
import './index.css'
// import PaymentData from '../Payment/PaymentData'

function TablePayment({ handlePayment }) {
  const [price, setPrice] = useState(1)
  
  const addPrice = () => setPrice(price + 1)
  
  const minPrice = () => {
    if(price > 1){
      setPrice(price - 1)
    }else{
      alert("Mnimal pembelian 1")
    }
  }
  
  const ticketPrice = trip[0].price
  let parsingPrice = ticketPrice * price
  let totalPrice = parsingPrice.toLocaleString()

  console.log(price)

  const [total, setTotal] = useState({
    price: 0,
    parsingPrice: 0,
  })

  const setTotalPrice = () => {
    setTotal(totalPrice)
  }

  useEffect(() => {
    console.log("terkirim")
    handlePayment()
  }, [total])

  console.log(price)
  console.log(parsingPrice)

  return(
    <>
      <div className='container mb-5'>
        <div className='d-flex justify-content-between border-bottom border-4'>
          <div>
            <p className='text-items'><span style={{color:"#ffaf00"}}>IDR. {trip[0].price.toLocaleString()}</span> / Person</p>
          </div>
          <div className='d-flex'>
              <button onClick={minPrice} className='btn-border'>
                <img src={minus} className="icon-plus-minus px-3" alt="..."/>
              </button>
            <p className='text-items'>{price}</p>
              <button onClick={addPrice} className='btn-border'>
                <img src={plus} className="icon-plus-minus px-3"alt="..." />
              </button>
          </div>
        </div>
        <div className='d-flex justify-content-between border-bottom border-4'>
          <div>
            <p className='text-items'>Total :</p>
          </div>
          <div className='d-flex'>
            <p className='price'>IDR. {totalPrice}</p>
          </div>
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <div>
          </div>
          <div className='d-flex'>
            <Link to='/payment'>
              <button className='rounded border-0 btn-booking'>
                <p className='btn-booking-text'>Bookig Now</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TablePayment