import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import '../App.css'

function FormAddTrip() {
  return(
    <div className='container my-5'>
      <p style={{fontWeight:"800", fontSize:"36px"}}>Add Trip</p>
      <Form id="mySwitch">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Tittle Trip</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Label>Country</Form.Label>
        <Form.Select aria-label="Default select example" style={{backgroundColor:"#b1b1b1"}}>
          <option></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Acomodation</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Transportation</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Eat</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Duration</Form.Label>
          <div className='d-flex align-items-center'>
            <div>
              <Col sm="">
                <Form.Control type="password" />
              </Col>
            </div>
            <div className='px-3 mb-2'>
              <Form.Label column sm="">
                Day
              </Form.Label>
            </div>
            <div>
              <Col sm="">
                <Form.Control type="password" />
              </Col>
            </div>
            <div className='px-3 mb-2'>
              <Form.Label column sm="">
                Night
              </Form.Label>
            </div>
          </div>
       </Form.Group>

       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date Trip</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Quota</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} style={{backgroundColor:"#b1b1b1"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Quota</Form.Label>
          <Col sm="3">
            <Form.Control type="file" />
          </Col>
        </Form.Group>

        <div className='d-flex' style={{margin:"0px auto", justifyContent:"space-around"}}>
          <Button variant="primary" type="submit" style={{width:"250px", backgroundColor:"orange", border:"none"}}>
            <p style={{fontWeight:"900", fontSize:"18px", marginBottom:"0px"}}>
              Add Trip
            </p>
          </Button>
        </div>

      </Form>
    </div>
  )
}

export default FormAddTrip