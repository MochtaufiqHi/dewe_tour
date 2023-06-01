// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import WaitingPayment from '../../pages/WaitingPayment';
import PaymentDate from '../../components/Payment/PaymentDate';
import PaymentItem from '../../components/Payment/PaymentItem';
import PaymentData from '../../components/Payment/PaymentData';

function ModalListTransaction(props) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={props.modal} onHide={props.hideModal} animation={false} size='lg' style={{top:"60px", height:"900px"}}>
        {/* <Modal.Header closeButton /> */}
        <Modal.Body className=''>
          <div className="px-1"> 
            <PaymentDate />
            <PaymentItem />
            <PaymentData />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.hideModal} style={{heigh:"35px"}}>
            {/* <p>Cancel</p> */}
            Cancel
          </Button>
          <Button variant="success" onClick={props.hideModal}>
            {/* <p>Approve</p> */}
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalListTransaction