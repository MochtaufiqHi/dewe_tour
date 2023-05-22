import hotel from '../../assets/it1.png'
import plane from '../../assets/it3.png'
import eat from '../../assets/it5.png'
import time from '../../assets/it4.png'
import date from '../../assets/it2.png'
import { trip } from '../../data'

// console.log(trip)

function InformationTrip({ payment }) {
  return(
    <>
      <div className="container mt-5">
        <p className='mb-3' style={{fontWeight:"900", fontSize:"18px"}}>Information Trip</p>
        <div className='d-flex w-100 justify-content-center'>
          {/* {itemTrip.map((data) => ( */}
          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0' style={{fontWeight:"800", fontSize:"13px", color:"#a8a8a8"}}>Acomodation</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={hotel} style={{objectFit:"contain"}} alt="..."/>
                </div>
                <div className='px-3'>
                  <p style={{fontWeight:"800", fontSize:"13px"}}>{trip[0].acomodation}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0' style={{fontWeight:"800", fontSize:"13px", color:"#a8a8a8"}}>Transportation</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={plane} style={{objectFit:"contain"}} alt="..."/>
                </div>
                <div className='px-3'>
                  <p style={{fontWeight:"800", fontSize:"13px"}}>{trip[0].transportation}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0' style={{fontWeight:"800", fontSize:"13px", color:"#a8a8a8"}}>Eat</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={eat} style={{objectFit:"contain"}} alt="..."/>
                </div>
                <div className='px-3'>
                  <p style={{fontWeight:"800", fontSize:"13px"}}>{trip[0].eat}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0' style={{fontWeight:"800", fontSize:"13px", color:"#a8a8a8"}}>Duration</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={time} style={{objectFit:"contain"}} alt="..."/>
                </div>
                <div className='px-3'>
                  <p style={{fontWeight:"800", fontSize:"13px"}}>{trip[0].duration.day} Day {trip[0].duration.night} Night</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{width:"250px"}}>
            <div>
              <p className='mb-0' style={{fontWeight:"800", fontSize:"13px", color:"#a8a8a8"}}>Date Trip</p>
              <div className='d-flex mt-1'>
                <div>
                  <img src={date} style={{objectFit:"contain"}} alt="..."/>
                </div>
                <div className='px-3'>
                  <p style={{fontWeight:"800", fontSize:"13px"}}>Data dummy</p>
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