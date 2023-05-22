import Table from "react-bootstrap/Table"

function PaymentData({ payment }) {
  // console.log(totalPrice)
  return(
    <div className="mt-0">
      <Table>
      <thead style={{fontWeight:"800", fontSize:"18px"}}>
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
          <td><p style={{fontWeight:"400", fontSize:"18px", color:"#b1b1b1"}}>1</p></td>
          <td><p style={{fontWeight:"400", fontSize:"18px", color:"#b1b1b1"}}>Taufiq Hidayat</p></td>
          <td><p style={{fontWeight:"400", fontSize:"18px", color:"#b1b1b1"}}>Male</p></td>
          <td><p style={{fontWeight:"400", fontSize:"18px", color:"#b1b1b1"}}>0987878855</p></td>
          <td><p style={{fontWeight:"800", fontSize:"18px"}}>Qty</p></td>
          <td><p style={{fontWeight:"800", fontSize:"18px"}}>:</p></td>
          <td><p style={{fontWeight:"800", fontSize:"18px"}}>1</p></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><p style={{fontWeight:"800", fontSize:"18px"}}>Total</p></td>
          <td><p style={{fontWeight:"800", fontSize:"18px"}}>:</p></td>
          <td><p style={{fontWeight:"800", fontSize:"18px", color:"red"}}>IDR. {payment}</p></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default PaymentData