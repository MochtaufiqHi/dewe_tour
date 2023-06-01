import hotel from '../../assets/img/it1.png'
import plane from '../../assets/img/it3.png'
import eat from '../../assets/img/it5.png'
import time from '../../assets/img/it4.png'
import date from '../../assets/img/it2.png'
import { trip } from '../../data'
import './index.css'

// console.log(trip)

function InformationTrip({ payment }) {
  return(
    <>
      <div className="container mt-5">
        <p className='mb-3 information-trip'>Information Trip</p>
        <div className='d-flex w-100 justify-content-center'>
          <div className='blank-trip'>
            <div>
              <p className='mb-0 item-service'>Acomodation</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={hotel} className='icon-service' alt="..."/>
                </div>
                <div className='px-3'>
                  <p clasName='service'>{trip[0].acomodation}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0 item-service'>Transportation</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={plane} className='icon-service' alt="..."/>
                </div>
                <div className='px-3'>
                  <p clasName='service'>{trip[0].transportation}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0 item-service'>Eat</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={eat} className='icon-service' alt="..."/>
                </div>
                <div className='px-3'>
                  <p clasName='service'>{trip[0].eat}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0 item-service'>Duration</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={time} className='icon-service' alt="..."/>
                </div>
                <div className='px-3'>
                  <p clasName='service'>{trip[0].duration.day} Day {trip[0].duration.night} Night</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0 item-service'>Date Trip</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={date} className='icon-service' alt="..."/>
                </div>
                <div className='px-3'>
                  <p clasName='service'>Data dummy</p>
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </>
  )
}

export default InformationTrip