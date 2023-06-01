// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalPayment(props) {



  return (
    <>
      <Modal size="lg" show={props.modalPayment} onHide={props.handleClosePay} style={{top:"170px"}}>
        <Modal.Body>
          <p style={{fontWeight:"500", fontSize:"24px"}} className="text-center">Your payment will be confirmed within 1 x 24 hours
          <br/>To see orders click <span className='text-dark font-weight-bold'><Link to="/waiting-payment" className='text-dark font-weight-bold'> Here </Link></span> thank you</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPayment