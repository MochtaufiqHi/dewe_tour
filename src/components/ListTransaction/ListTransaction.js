import React, { useEffect, useState } from "react";
import action from "../../assets/img/search.png";
import "./index.css";
import ModalListTransaction from "./ModalListTransaction";

import { useQuery } from "react-query";
import { API } from "../../config/api";

function ListTransaction() {
  const [transaction, setTransaction] = useState(null)
  const [index, setIndex] = useState(null)

  let { data: transactions } = useQuery("transactionCache", async () => {
    const response = await API.get("/transaction");
    setTransaction(response.data.data)
    return response.data.data;
  });


  useEffect(() => {
    transaction?.filter((item) => {
      if(transaction.id == index) {
        setTransaction(item)
        setIndex(index)
      }
    })
  }, [index])

  const [modalShow, setModalShow] = useState(false);

  const showModal = () => setModalShow(true);
  const hideModal = () => setModalShow(false);

  console.log(transaction)

  return (
    <>
      <div className="container mt-5" style={{ marginBottom: "100px" }}>
        <p className="incoming-text">Incoming Transaction</p>
        <div className="bg-danger">
          <div className="container text-start bg-light">
            <div className="row align-items-center content-table">
              <div className="col-1">
                <p className="text-colom-h my-4">No</p>
              </div>
              <div className="col-4">
                <p className="text-colom-h my-4">Users</p>
              </div>
              <div className="col-4">
                <p className="text-colom-h my-4">Trip</p>
              </div>
              {/* <div className="col-2">
                <p className="text-colom-h my-4">Proof</p>
              </div> */}
              <div className="col-2">
                <p className="text-colom-h my-4">Status</p>
              </div>
              <div className="col-1">
                <p className="text-colom-h my-4">Action</p>
              </div>
            </div>
            {transactions?.map((data, index) => {
              return (
                <div className="row align-items-start content-table">
                  <div className="col-1">
                    <p className="text-colom">{index + 1}</p>
                  </div>
                  <div className="col-4">
                    <p className="text-colom">{data?.user?.fullname}</p>
                  </div>
                  <div className="col-4">
                    <p className="text-colom">{data?.trip?.title}</p>
                  </div>
                  {/* <div className="col-2">
                <p className="text-colom">{data?.attachment}</p>
              </div> */}
                  <div className="col-2">
                    <p className="text-colom rounded text-warning">{data?.status}
                       {/* {data.status === "waiting approve" ? 
                        (<p className="text-colom bg-warning rounded text-light">{data?.trip?.status}</p>) :
                        (<p className="text-colom bg-success rounded text-light">{data?.trip?.status}</p> )
                      }  */}
                      {/* <button onClick={() => {
                        console.log(data.status)
                      }}>ini button</button> */}
                    </p>
                  </div>
                  <div className="col-1 p-1">
                    <button 
                      className="border white-border" 
                      style={{backgroundColor:"#fff"}} 
                      onClick={() => {
                        showModal()
                        setIndex(data?.id)
                        
                      }}>

                      <img src={action} style={{ marginLeft: "18px", cursor:"pointer" }}></img>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ModalListTransaction
        modal={modalShow}
        showModal={showModal}
        hideModal={hideModal}
        index={index}
      />
    </>
  );
}

export default ListTransaction;
