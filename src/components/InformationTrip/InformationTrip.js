import hotel from '../../assets/img/it1.png'
import plane from '../../assets/img/it3.png'
import eat from '../../assets/img/it5.png'
import time from '../../assets/img/it4.png'
import date from '../../assets/img/it2.png'
import { trip } from '../../data'
import './index.css'
import { useParams } from 'react-router-dom'
import { API } from "../../config/api"
import { useQuery } from "react-query"

// console.log(trip)

function InformationTrip({ payment }) {

  let { id } = useParams()

  let { data: trip } = useQuery('tripCache', async () => {
    const response = await API.get('/trip/' + id + 1);
    return response?.data?.data;
  });

  console.log(trip)

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
                  <p clasName='service'>{trip?.acommodation}</p>
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
                  <p clasName='service'>{trip?.transportation}</p>
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
                  <p clasName='service'>{trip?.eat}</p>
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
                  <p clasName='service'>{trip?.day} Day {trip?.night} Night</p>
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
                  <p clasName='service'>{trip?.dateTrip}</p>
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      <div className="container">
          <p style={{fontWeight:"800", fontSize:"18px", marginTop:"26px", marginBottom:"8px"}}>Description</p>
          <p style={{fontWeight:"400", fontSize:"14px", color:"#a8a8a8", textAlign:"justify"}}>{trip?.description}</p>
        </div>
    </>
  )
}

export default InformationTrip