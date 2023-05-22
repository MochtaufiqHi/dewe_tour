import example from "../../assets/hero1.png"
import './index.css'

function ImageGroup() {
  return(
    <>
      <div className="container w-100">
        <div className="my-5">
          <p style={{fontWeight:"900", fontSize:"48px"}}>6D/4N Fun Tassie Vacation + Sydney</p>
          <p style={{fontWeight:"800", fontSize:"24px", color:"#a8a8a8"}}>Australia</p>
        </div>
        <div className="mb-3 rounded">
          <img src={example} className="w-100 rounded" alt="..."/>
        </div>
        {/* <div className="d-flex  my-5" style={{width:"100px"}}>
          <div style={{width:"30%", objectFit:"cover"}}>
            <img src={example} className="w-30" style={{objectFit:"cover"}}></img>
          </div>
          <div style={{width:"30%"}}>
            <img src={example} className="w-30"></img>
          </div>
          <div style={{width:"30%"}}>
            <img src={example} className="w-30"></img>
          </div>
        </div> */}
        <div className="d-flex justify-content-between">
          <div className="hayyy">
            <img className="w-100 rounded" src={example} alt="..."/>
          </div>
          <div className="hayyy">
            <img className="w-100 rounded" src={example} alt="..."/>
          </div>
          <div className="hayyy">
            <img className="w-100 rounded" src={example} alt="..."/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGroup