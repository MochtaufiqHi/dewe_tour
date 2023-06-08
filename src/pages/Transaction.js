import { Link } from "react-router-dom"
import ListTransaction from "../components/ListTransaction/ListTransaction"

function Transaction() {
  return(
    <>
      <div className="container">
        <ListTransaction />
      </div>
    </>
  )
}

export default Transaction