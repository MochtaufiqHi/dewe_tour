import resi from '../../assets/img/resi.png'
import { trip } from '../../data'
import { useState } from 'react'
import './index.css'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { API } from '../../config/api'
import { useContext } from 'react'
import { UserContext } from '../../context/useContext'

const data = JSON.parse(localStorage.getItem("user"))
// console.log(data.title)



function PaymentItem() {
  // const [state, setState] = useState(data)
  // console.log(state)
  // let { id } = useParams()
  // const [data] = useContext(UserContext);
  // console.log(data)

  // let { data: transaction } = useQuery('/transactionCache', async () => {
  //   const response = await API.get('/transaction/' + id)
  //   return response.data.data
  // })
  // console.log(transaction)

  // console.log(data)
  return(
    <div className="container p-0 border">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="mt-4 coloum-div">
          <p className='div-tittle'>{}</p>
          <p className='country'>{}</p>
          <p className='waiting'>Waiting Approve</p>
        </div>
        <div className="d-flex mt-4" style={{width:"33%", justifyContent:"space-around"}}>
          <div>
            <div className="mb-5">
              <p className='info-trip'>Date Trip</p>
              <p className='item-trip'>{}</p>
            </div>
            <div >
              <p className='info-trip'>Accomodation</p>
              <p className='item-trip'>{}</p>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <p className='info-trip'>Duration</p>
              <p className='item-trip'>{} Day {} Nights</p>
            </div>
            <div>
              <p className='info-trip'>Transportion</p>
              <p className='item-trip'>{}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 coloum-div">
          <div className="container">
            <div className='d-flex justify-content-end'>
              <img src={resi} alt="..." className='img-resi'/>
            </div>
            <p className='text-end my-4' style={{marginRight:"50px"}}>upload payment proof</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentItem