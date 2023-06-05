import { Link } from "react-router-dom"
import ListTransaction from "../components/ListTransaction/ListTransaction"

function Transaction() {
  return(
    <>
      <div className="container">
        <ListTransaction />

        <div className="d-flex justify-content-end">
          <Link to="/add-country" >Add Country</Link>
        </div>
      </div>
    </>
  )
}

export default Transaction