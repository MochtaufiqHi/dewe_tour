// import ImageGroup from "../components/ImageGroup/ImageGroup"
import InformationTrip from "../components/InformationTrip/InformationTrip"
import TablePayment from "../components/TablePayment/TablePayment"
// import CarouselImg from "../components/ImageGroup/Carousel"
import { useContext } from "react"
import { UserContext } from "../context/useContext"

function Detail({handlePayment, payment}) {
  const [data] = useContext(UserContext)
  console.log(data.user.id)
  return(
    <>
      <div className="container bg-light w-100">
        {/* <CarouselImg /> */}
        <InformationTrip payment={payment}/>
        <TablePayment handlePayment={handlePayment} />
      </div>
    </>
  )
}

export default Detail;