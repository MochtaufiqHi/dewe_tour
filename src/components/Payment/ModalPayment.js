import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPayment(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


// const handleClosePay = () => setModalPayment(false)
// const handleShowPay = () => setModalPayment(true)

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal size="lg" show={props.modalPayment} onHide={props.handleClosePay} style={{top:"170px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your payment will be confirmed within 1 x 24 hours<br/>To see orders click <Link to='/waiting-payment'>Here</Link> thank you</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClosePay}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClosePaye}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPayment