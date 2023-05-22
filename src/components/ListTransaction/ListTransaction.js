// import Table from 'react-bootstrap/Table'
import React, { useState } from 'react';
import action from '../../assets/search.png'
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
        <p style={{fontWeight:"900", fontSize:"36px"}}>Incoming Transaction</p>
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
                {/* <p className="text-colom">action</p> */}
              </div>
            </div>
            )


          })}


          </div> 

          {/* <Table>
            <thead>
              <th>No</th>
              <th>Users</th>
              <th>trip</th>
              <th>Proof</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody>
            {transaction.map((data, index) => {
              <tr>
                <td>{index + 1}</td>
                <td>{data.user}</td>
                <td>{data.tdip}</td>
                <td>{data.proof}</td>
                <td>{data.status}</td>
                <td>{action}</td>
              </tr>
            })}
            </tbody>
          </Table> */}
        </div>
      {/* <Table style={{backgroundColor:"white"}}>
      <thead>
        <tr>
          <th><p>No</p></th>
          <th><p>Users</p></th>
          <th><p>Trip</p></th>
          <th><p>Proof</p></th>
          <th><p>Status Payment</p></th>
          <th><p>Action</p></th>
        </tr>
      </thead>
      <tbody>
          {transaction.map((data, index) => {
            
          <tr>
            <td>{index}</td>
            <td><p>{data.user}</p></td>
            <td><p>{data.trip}</p></td>
            <td><p>{data.proof}</p></td>
            <td>
              <p style={{color:"yellow", fontWeight:"500", fontSize:"14px"}}>
                {data.status}
              </p></td>
            <td><img src={action} alt="..."/></td>
          </tr>
          })}

        {/* <tr>
          <td>2</td>
          <td><p>Haris Rahman</p></td>
          <td><p>6D/4N Exciting Summer...</p></td>
          <td><p>bni.jpg</p></td>
          <td><p style={{color:"green", fontWeight:"500", fontSize:"14px"}}>Approve</p></td>
          <td><img src={action} alt="..."/></td>
        </tr>
        <tr>
          <td>3</td>
          <td><p>Amin Subagiyo</p></td>
          <td><p>6D/4N Fun Tassie Vaca ...</p></td>
          <td><p>permata.jpg</p></td>
          <td><p style={{color:"red", fontWeight:"500", fontSize:"14px"}}>Cancel</p></td>
          <td><img src={action} alt="..."/></td>
        </tr>
        <tr>
          <td>4</td>
          <td><p>Haris Astina</p></td>
          <td><p>6D/4N Wonderful Autum ...</p></td>
          <td><p>permata.jpg</p></td>
          <td><p style={{color:"red", fontWeight:"500", fontSize:"14px"}}>Cancel</p></td>
          <td><img src={action} alt="..."/></td>
        </tr>
        <tr>
          <td>5</td>
          <td><p>Aziz Oni On</p></td>
          <td><p>6D/4N Magic Tokyo ...</p></td>
          <td><p>bi.jpg</p></td>
          <td><p style={{color:"yellow", fontWeight:"500", fontSize:"14px"}}>Pending</p></td>
          <td><img src={action} alt="..."/></td>
        </tr>
        <tr>
          <td>6</td>
          <td><p>Radif</p></td>
          <td><p>6D/4N Fun Tassie Vaca ...</p></td>
          <td><p>bca.jpg</p></td>
          <td><p style={{color:"yellow", fontWeight:"500", fontSize:"14px"}}>Pending</p></td>
          <td><img src={action} alt="..."/></td>
        </tr> */}

      {/* </tbody> */}
      {/* </Table> */} 
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