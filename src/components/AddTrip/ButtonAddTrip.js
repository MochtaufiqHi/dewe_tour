import { Link } from 'react-router-dom'

function ButtonAddTrip() {
  return(
    <div className="d-flex justify-content-between my-5">
      <div>
        <p style={{fontWeight:"800", fontSize:"36px"}}>Income Trip</p>
      </div>
      <div className="mt-2">
        <Link to="/add-trip">
          <button className="rounded" style={{width:"150px", height:"40px", backgroundColor:"orange", border:"none"}}>
            <p className="mt-1" style={{color:"white", fontWeight:"900", fontSize:"18px"}}>Add Trip</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ButtonAddTrip