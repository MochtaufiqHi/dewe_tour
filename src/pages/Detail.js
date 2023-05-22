// import ImageGroup from "../components/ImageGroup/ImageGroup"
import InformationTrip from "../components/InformationTrip/InformationTrip"
import TablePayment from "../components/TablePayment/TablePayment"
import CarouselImg from "../components/ImageGroup/Carousel"
// import {getParams} from "react-router-dom"

function Detail({handlePayment, payment}) {
  // window.scrollTo(0,0)

  // console.log(props)
  // const getValueOfParams = () => {
  //   getParams("id")
  // }

  // console.log(getValueOfParams)

  // const handlePaymentvalue = handlePayment
  console.log(handlePayment)

  return(
    <>
      <div className="container bg-light w-100">
        {/* <ImageGroup /> */}
        <CarouselImg />
        <InformationTrip payment={payment}/>
        <div className="container">
          <p style={{fontWeight:"800", fontSize:"18px", marginTop:"26px", marginBottom:"8px"}}>Description</p>
          <p style={{fontWeight:"400", fontSize:"14px", color:"#a8a8a8", textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <TablePayment handlePayment={handlePayment} />
      </div>
    </>
  )
}

export default Detail