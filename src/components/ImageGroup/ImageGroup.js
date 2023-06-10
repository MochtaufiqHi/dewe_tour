import example from "../../assets/img/hero1.png"
import './index.css'

function ImageGroup() {
  return(
    <>
      <div className="container w-100">
        <div className="my-5">
          <p className="trip-tittle">6D/4N Fun Tassie Vacation + Sydney</p>
          <p className="trip-country">Australia</p>
        </div>
        <div className="mb-3 rounded">
          <img src={example} className="w-100 rounded" alt="..."/>
        </div>
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