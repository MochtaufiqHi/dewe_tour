// const item = [
//   {
//     text: "Date Trip",
//     content: "26 August 2020",
//   },
//   {
//     text: "Duration",
//     content: "6 Day 4 Night",
//   },
//   {
//     text: "Accomodation",
//     content: "Hotel 4 Nights",
//   },
//   {
//     text: "Transporartion",
//     content: "Qatar Airways",
//   },
// ]
import resi from '../../assets/resi.png'
import { trip } from '../../data'

function PaymentItem() {
  return(
    <div className="container p-0 border">
      <div className="container d-flex flex-wrap justify-content-between">
        <div className="mt-4" style={{width:"33%"}}>
          <p style={{fontWeight:"900", fontSize:"24px", marginLeft:"32px"}}>{trip[0].tittle}</p>
          <p style={{fontWeight:"400", fontSize:"14px", color:"#959595", marginLeft:"32px"}}>{trip[0].country}</p>
          <p style={{fontWeight:"500", fontSize:"12px", color:"#ff9900", marginLeft:"32px"}}>Waiting Approve</p>
        </div>
        {/* <div className="d-flex bg-danger" style={{width:"33%"}}>
          <div style={{width:"200px"}}>
            <p>{data.text}</p>
            <p>{data.content}</p>
          </div>
        </div> */}
        <div className="d-flex mt-4" style={{width:"33%", justifyContent:"space-around"}}>
          <div>
            <div className="mb-5">
              <p style={{fontWeight:"800", fontSize:"18px", marginBottom:"0px"}}>Date Trip</p>
              <p style={{fontWeight:"400", fontSize:"14px", color:"#959595"}}>{trip[0].date}</p>
            </div>
            <div >
              <p style={{fontWeight:"800", fontSize:"18px", marginBottom:"0px"}}>Accomodation</p>
              <p style={{fontWeight:"400", fontSize:"14px", color:"#959595"}}>{trip[0].acomodation}</p>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <p style={{fontWeight:"800", fontSize:"18px", marginBottom:"0px"}}>Duration</p>
              <p style={{fontWeight:"400", fontSize:"14px", color:"#959595"}}>{trip[0].duration.day} Day {trip[0].duration.night} Nights</p>
            </div>
            <div>
              <p style={{fontWeight:"800", fontSize:"18px", marginBottom:"0px"}}>Transportion</p>
              <p style={{fontWeight:"400", fontSize:"14px", color:"#959595"}}>{trip[0].transportation}</p>
            </div>
          </div>
        </div>
        <div className="mt-4" style={{width:"33%"}}>
          <div className="container">
            <div className='d-flex justify-content-end'>
              <img src={resi} alt="..." style={{width:"180px", marginRight:"40px"}}/>
            </div>
            <p className='text-end my-4' style={{marginRight:"50px"}}>upload payment proof</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentItem