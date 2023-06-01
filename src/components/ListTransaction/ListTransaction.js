import React, { useState } from 'react';
import action from '../../assets/img/search.png'
import { transaction } from '../../data'
import './index.css'
import ModalListTransaction from './ModalListTransaction'


function ListTransaction() {

  const [modalShow, setModalShow] = useState(false)
  
  const showModal = () => setModalShow(true)
  const hideModal = () => setModalShow(false)
  
  return(
    <>
      <div className="container mt-5" style={{marginBottom:"100px"}}>
        <p className='incoming-text'>Incoming Transaction</p>
        <div className='bg-danger'>
          <div class="container text-start bg-light">
          <div class="row align-items-center content-table">
              <div class="col-1">
                <p className="text-colom-h my-4">No</p>
              </div>
              <div class="col-2">
                <p className="text-colom-h my-4">Users</p>
              </div>
              <div class="col-4">
                <p className="text-colom-h my-4">Trip</p>
              </div>
              <div class="col-2">
                <p className="text-colom-h my-4">Proof</p>
              </div>
              <div class="col-2">
                <p className="text-colom-h my-4">Status</p>
              </div>
              <div class="col-1">
                <p className="text-colom-h my-4">Action</p>
              </div>
            </div>
          {transaction.map((data, index) => {
            return(
            <div class="row align-items-start content-table">
              <div class="col-1">
                <p className="text-colom">{index + 1}</p>
              </div>
              <div class="col-2">
                <p className="text-colom">{data.user}</p>
              </div>
              <div class="col-4">
                <p className="text-colom">{data.trip}</p>
              </div>
              <div class="col-2">
                <p className="text-colom">{data.proof}</p>
              </div>
              <div class="col-2">
                <p className="text-colom">{data.status}</p>
              </div>
              <div class="col-1 p-1">
                <button className='border border-none' onClick={showModal}>
                  <img src={action} style={{marginLeft:"18px"}}/>
                </button>
              </div>
            </div>
            )
          })}
          </div> 
        </div>
      </div>
      <ModalListTransaction 
        modal={modalShow}
        showModal={showModal}
        hideModal={hideModal}
      />
    </>
  )
}

export default ListTransaction