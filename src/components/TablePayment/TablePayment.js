import { useState } from 'react'
import plus from '../../assets/img/Plus.png'
import minus from '../../assets/img/Minus.png'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

import { useParams } from 'react-router-dom'
import { API } from "../../config/api"
import { useMutation, useQuery } from "react-query"

function TablePayment() {
  let navigate = useNavigate()
  let { id } = useParams()

  let { data: trip } = useQuery('tripCache', async () => {
    const response = await API.get('/trip/' + id);
    return response.data.data;
  });

  const [harga, setHarga] = useState(1)
  
  const addPrice = () => setHarga(harga + 1)

  let totalHarga = trip?.price*harga
  
  const minPrice = () => {
    if(harga > 1){
      setHarga(harga - 1)
    }else{
      alert("Mnimal pembelian 1")
    }
  }
  

  const handleBook = useMutation( async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        },
      };

      const data = {
        counterQty: harga,
        total: totalHarga,
        status: "waiting Approve",
        attachment: "bca.jpg",
        trip_id: trip.id,
      }

      const body = JSON.stringify(data)

      const response = await API.post('/transaction', body, config)
      console.log("transaction success : ", response)
      navigate('/profile')
    } catch (error) {
      console.log("transaction failed : ", error)
    }
  })

  return(
    <>
      <div className='container mb-5'>
        <div className='d-flex justify-content-between border-bottom border-4'>
          <div>
            <p className='text-items'><span style={{color:"#ffaf00"}}>IDR. {(trip?.price)?.toLocaleString()} </span> / Person</p>
          </div>
          <div className='d-flex'>
              <button className='btn-border'>
                <img src={minus} onClick={minPrice} className="icon-plus-minus px-3" alt="..."/>
              </button>
            <p className='text-items'>{harga}</p>
              <button className='btn-border'>
                <img src={plus} onClick={addPrice} className="icon-plus-minus px-3"alt="..." />
              </button>
          </div>
        </div>
        <div className='d-flex justify-content-between border-bottom border-4'>
          <div>
            <p className='text-items'>Total :</p>
          </div>
          <div className='d-flex'>
            <p className='price'>IDR. {(totalHarga)?.toLocaleString()}</p>
          </div>
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <div>
          </div>
          <div className='d-flex'>
            {/* <Link to={`/payment`}> */}
            {/* <a href='/payment'> */}
              <button className='rounded border-0 btn-booking' onClick={(e) => handleBook.mutate(e)}>
                <p className='btn-booking-text'>Bookig Now</p>
              </button>
            {/* </a> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default TablePayment