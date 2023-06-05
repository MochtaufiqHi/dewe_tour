import React, { useState } from 'react';
import action from '../../assets/img/search.png'
import { transaction } from '../../data'
import './index.css'
import ModalListTransaction from './ModalListTransaction'

import { useQuery } from 'react-query'
import { API } from '../../config/api'


function ListTransaction() {

  let { data: transactions } = useQuery('transactionCache', async () => {
    const  response = await API.get('/transaction');
    return response.data.data
  })
  
  // console.log(transactions)

  const [modalShow, setModalShow] = useState(false)
  
  const showModal = () => setModalShow(true)
  const hideModal = () => setModalShow(false)
  
  return(
    <>
      <div className="container mt-5" style={{marginBottom:"100px"}}>
        <p className='incoming-text'>Incoming Transaction</p>
        <div className='bg-danger'>
          <div className="container text-start bg-light">
          <div className="row align-items-center content-table">
              <div className="col-1">
                <p className="text-colom-h my-4">No</p>
              </div>
              <div className="col-2">
                <p className="text-colom-h my-4">Users</p>
              </div>
              <div className="col-4">
                <p className="text-colom-h my-4">Trip</p>
              </div>
              <div className="col-2">
                <p className="text-colom-h my-4">Proof</p>
              </div>
              <div className="col-2">
                <p className="text-colom-h my-4">Status</p>
              </div>
              <div className="col-1">
                <p className="text-colom-h my-4">Action</p>
              </div>
            </div>
          {transactions?.map((data, index) => {
            return(
            <div className="row align-items-start content-table">
              <div className="col-1">
                <p className="text-colom">{index + 1}</p>
              </div>
              <div className="col-2">
                <p className="text-colom">{data?.user?.fullname}</p>
              </div>
              <div className="col-4">
                <p className="text-colom">{data?.trip?.title}</p>
              </div>
              <div className="col-2">
                <p className="text-colom">{data?.attachment}</p>
              </div>
              <div className="col-2">
                <p className="text-colom">{data?.status}</p>
              </div>
              <div className="col-1 p-1">
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