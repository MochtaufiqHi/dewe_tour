import Table from "react-bootstrap/Table"
import "./index.css"

function PaymentData({ payment }) {
  // console.log(totalPrice)
  console.log(payment)
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
          <td><p className="data-table-user">Taufiq Hidayat</p></td>
          <td><p className="data-table-user">Male</p></td>
          <td><p className="data-table-user">0987878855</p></td>
          <td><p className="data-table-set">Qty</p></td>
          <td><p className="data-table-set">:</p></td>
          <td><p className="data-table-set">1</p></td>
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
          <td><p className="data-table-total-p">IDR. {payment}</p></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default PaymentData