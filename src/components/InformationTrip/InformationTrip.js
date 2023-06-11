import hotel from '../../assets/img/it1.png'
import plane from '../../assets/img/it3.png'
import eat from '../../assets/img/it5.png'
import time from '../../assets/img/it4.png'
import date from '../../assets/img/it2.png'
import { Modal } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import './index.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from "../../config/api"
import { useQuery } from "react-query"


function InformationTrip() {

  let { id } = useParams()

  let { data: trip } = useQuery('tripCache', async () => {
    const response = await API.get('/trip/' + id );
    return response?.data?.data;
  });

  const [showModal, setShowModal] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleOpenModal = (index) => {
    setShowModal(true)
    setActiveIndex(index)
    console.log("clicked");
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleCarouselSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex)
  }

  return(
    <>

    {/* imaget */}
      <div className='mt-5'> 
        <div className='p-3'>
          <h1>{trip?.title}</h1>
          <h4 style={{opacity:"50%"}}>{trip?.country?.name}</h4>
        </div>
        <div className='mb-2'>
          <img src={trip?.image} alt="....." className='w-100'/>
        </div>
        <div className='d-flex'>
          <div className=''>
            <img src={trip?.image} alt="....." className='w-100' onClick={() => handleOpenModal(0)}/>
          </div>
          <div className='mx-2'>
            <img src={trip?.image} alt="....." className='w-100' onClick={() => handleOpenModal(0)}/>
          </div>
          <div className=''>
            <img src={trip?.image} alt="....." className='w-100' onClick={() => handleOpenModal(0)}/>
          </div>
        </div>
      </div>

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


        <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-lg" centered>
          <Modal.Body>
            <Carousel activeIndex={activeIndex} onSelect={handleCarouselSelect}>
              <Carousel.Item>
                <img
                  src={trip?.image}
                  alt="Image 1"
                  style={{ width: "100%", height: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={trip?.image}
                  alt="Image 2"
                  style={{ width: "100%", height: "100%" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={trip?.image}
                  alt="Image 3"
                  style={{ width: "100%", height: "100%" }}
                />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
    </>
  )
}

export default InformationTrip