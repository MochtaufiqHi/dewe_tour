import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import palm from '../../assets/img/palm.png'
import hibicus from '../../assets/img/hibiscus.png'


function FormRegister({show, handleRegClose}) {
  return (
    <>
      <Modal show={show} onHide={handleRegClose} scrollable="true" className='d-relative'>
        {/* <Modal.Header> */}
        {/* </Modal.Header> */}
        <Modal.Body className='m-4'>
          <Modal.Title className='mb-4 text-center' style={{fontWeight:"700", fontSize:"36px"}}>Register</Modal.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Full Name</Form.Label>
              <Form.Control
                type="input"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Email</Form.Label>
              <Form.Control
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Phone</Form.Label>
              <Form.Control
                type="input"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Address</Form.Label>
              <Form.Control
                type="input"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button variant="secondary" onClick={handleRegClose} className="w-100 border border-none" style={{backgroundColor:"#ffaf00"}}>
            Close
          </Button>
        </Modal.Body>
          <img src={palm} alt="..." style={{position:"absolute"}}/>
          <img src={hibicus} alt="..." style={{position:"absolute", right:"0px"}}/>
        {/* <Modal.Footer> */}
          {/* <Button variant="primary" onClick={handleRegClose}>
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default FormRegister