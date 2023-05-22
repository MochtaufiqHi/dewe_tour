// import PaymentData from '../Payment/PaymentData'
import { useEffect, useState } from 'react'
import plus from '../../assets/Plus.png'
import minus from '../../assets/Minus.png'
import { trip } from '../../data'
import { Link } from 'react-router-dom'
import PaymentData from '../Payment/PaymentData'

function TablePayment({ handlePayment }) {
  // const [price, setPrice] = useState(0)

  console.log(handlePayment)
  // const addPrice = () => {
  //   setPrice + 1
  // }

  // const minusPrice = () => {
  //   setPrice -1
  // }
  // let priceIdr = 12398000

  
  const [price, setPrice] = useState(1)
  
  const addPrice = () => setPrice(price + 1)
  
  const minPrice = () => {
    if(price > 1){
      setPrice(price - 1)
    }else{
      alert("Mnimal pembelian 1")
    }
  }
  // const minPrice = () => setPrice(price - 1)

  // const decrement = () => {
  //   if(price >= 0){
  //     alert("minimal pembelian 1") 
  //   } else {
  //     minPrice()
  //   }
  // }
  
  const ticketPrice = trip[0].price
  let parsingPrice = ticketPrice * price
  let totalPrice = parsingPrice.toLocaleString()

  const [total, setTotal] = useState(0)

  const setTotalPrice = () => {
    setTotal(totalPrice)
  }

  useEffect(() => {
    console.log("terkirim")
    handlePayment(totalPrice)
  }, [parsingPrice])

  // const [totalPriceSend] = useState(totalPrice)

  console.log(price)

  return(
    <>
      <div className='container mb-5'>
        <div className='d-flex justify-content-between border-bottom border-4'>
          <div>
            <p style={{paddingTop:"14px", fontSize:"24px", fontWeight:"900"}}><span style={{color:"#ffaf00"}}>IDR. {trip[0].price.toLocaleString()}</span> / Person</p>
          </div>
          <div className='d-flex'>
            {/* <button onClick={addPrice}> */}
              <button onClick={minPrice} style={{border:"none"}}>
                <img src={minus} style={{objectFit:"contain"}} className="px-3" alt="..."/>
              </button>
            {/* </button> */}
            <p style={{paddingTop:"14px", fontSize:"24px", fontWeight:"900"}}>{price}</p>
            {/* <button onClick={minusPrice}> */}
              <button onClick={addPrice} style={{border:"none"}}>
                <img src={plus} className="px-3" style={{objectFit:"contain"}}alt="..." />
              </button>
            {/* </button> */}
          </div>
        </div>
        <div className='d-flex justify-content-between border-bottom border-4'>
          <div>
            <p style={{paddingTop:"14px", fontSize:"24px", fontWeight:"900"}}>Total :</p>
          </div>
          <div className='d-flex'>
            <p style={{color:"#ffaf00", paddingTop:"14px", fontSize:"24px", fontWeight:"900"}}>IDR. {totalPrice}</p>
            {/* <img src={minus} style={{objectFit:"contain"}} className="px-3"></img>
            <p style={{paddingTop:"14px", fontSize:"24px", fontWeight:"900"}} >1</p>
            <img src={plus} className="px-3" style={{objectFit:"contain"}}></img> */}
          </div>
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <div>
            {/* <p style={{paddingTop:"14px", fontSize:"24px", fontWeight:"900"}}>Total :</p> */}
          </div>
          <div className='d-flex'>
            <Link to='/payment'>
              <button className='rounded border-0' style={{backgroundColor:"#ffaf00", color:"white", height:"50px", width:"213px"}}>
                <p style={{fontWeight:"900", fontSize:"18px", marginTop:"10px"}}>Bookig Now</p>
              </button>
            </Link>
            {/* <p style={{color:"#ffaf00", paddingTop:"14px", fontSize:"24px", fontWeight:"900"}}>IDR. 12,398,000</p> */}
            {/* <img src={minus} style={{objectFit:"contain"}} className="px-3"></img>
            <p style={{paddingTop:"14px", fontSize:"24px", fontWeight:"900"}} >1</p>
            <img src={plus} className="px-3" style={{objectFit:"contain"}}></img> */}
          </div>
        </div>
      </div>

      {/* <PaymentData setTotalPrice={setTotalPrice}/> */}


      {/* <Table>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button className='rounded'>Book Now</button>
          </td>
        </tr>
      </tbody>
    </Table> */}
    {/* <PaymentData style={{display:"none"}}
      totalPrice={totalPriceSend}
    /> */}
    </>
  )
}

export default TablePayment