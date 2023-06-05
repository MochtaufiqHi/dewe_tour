// import ImageGroup from "../components/ImageGroup/ImageGroup"
import InformationTrip from "../components/InformationTrip/InformationTrip"
import TablePayment from "../components/TablePayment/TablePayment"
import CarouselImg from "../components/ImageGroup/Carousel"

function Detail({handlePayment, payment}) {
  return(
    <>
      <div className="container bg-light w-100">
        <CarouselImg />
        <InformationTrip payment={payment}/>
        <TablePayment handlePayment={handlePayment} />
      </div>
    </>
  )
}

export default Detail;