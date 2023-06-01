import resi from '../../assets/img/resi.png'
import { trip } from '../../data'
import './index.css'

function PaymentItem() {
  return(
    <div className="container p-0 border">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="mt-4 coloum-div">
          <p className='div-tittle'>{trip[0].tittle}</p>
          <p className='country'>{trip[0].country}</p>
          <p className='waiting'>Waiting Approve</p>
        </div>
        <div className="d-flex mt-4" style={{width:"33%", justifyContent:"space-around"}}>
          <div>
            <div className="mb-5">
              <p className='info-trip'>Date Trip</p>
              <p className='item-trip'>{trip[0].date}</p>
            </div>
            <div >
              <p className='info-trip'>Accomodation</p>
              <p className='item-trip'>{trip[0].acomodation}</p>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <p className='info-trip'>Duration</p>
              <p className='item-trip'>{trip[0].duration.day} Day {trip[0].duration.night} Nights</p>
            </div>
            <div>
              <p className='info-trip'>Transportion</p>
              <p className='item-trip'>{trip[0].transportation}</p>
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