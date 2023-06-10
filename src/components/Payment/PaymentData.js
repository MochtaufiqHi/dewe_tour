import Table from "react-bootstrap/Table"
import "./index.css"
import { useContext } from "react";
import { UserContext } from "../../context/useContext";

// const data = JSON.parse(localStorage.getItem("user"))

function PaymentData() {
  const [data] = useContext(UserContext);
  // console.log(totalPrice)
  return(
    <div className="mt-0">
      <Table>
      <thead className="table-head">
        <tr>
          <th></th>
          <th></th>
          <th><p>No</p></th>
          <th><p>Full Name</p></th>
          <th><p>Gender</p></th>
          <th><p>Phone</p></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td><p className="data-table-user">1</p></td>
          <td><p className="data-table-user">{data.user.name}</p></td>
          <td><p className="data-table-user">Male</p></td>
          <td><p className="data-table-user">{data.user.phone}</p></td>
          <td><p className="data-table-set">Qty</p></td>
          <td><p className="data-table-set">:</p></td>
          <td><p className="data-table-set">{data && data[0]?.quantity}</p></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><p className="data-table-total">Total</p></td>
          <td><p className="data-table-total">:</p></td>
          <td><p className="data-table-total-p">IDR. {data && data[0]?.price}</p></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default PaymentData