// import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import { useEffect } from "react";

function ModalListTransaction({ modal, showModal, hideModal, index }) {

    let { data: transUser, refetch } = useQuery("transIdCache", async () => {
      const response = await API.get("/transaction/" + index);
      return response.data.data;
      // },{refetchInterval: 100});
    });

  useEffect(() => {
    refetch()
  }, [index])

  return (
    <>
      <Modal
        show={modal}
        onHide={hideModal}
        animation={false}
        size="lg"
        style={{ top: "60px", height: "900px" }}
      >
        {/* <Modal.Header closeButton /> */}
        <Modal.Body className="">
          <div className="px-1">
            <div className="mt-0">
              <div className="container p-0 border">
                  <h1 className="text-center mt-4">{transUser?.trip?.title}</h1>
                <div className="container d-flex flex-wrap justify-content-between">
                  <div
                    className="d-flex mt-4"
                    style={{ width: "100%", justifyContent: "space-around" }}
                  >
                    <div>
                      <div className="mb-5">
                        <p className="info-trip">Date Trip</p>
                        <p className="item-trip">{transUser?.trip?.dateTrip}</p>
                      </div>
                      <div>
                        <p className="info-trip">Accomodation</p>
                        <p className="item-trip">{transUser?.trip?.acommodation}</p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-5">
                        <p className="info-trip">Duration</p>
                        <p className="item-trip">
                          {transUser?.trip?.day}  Day {transUser?.trip?.night}  Nights
                        </p>
                      </div>
                      <div>
                        <p className="info-trip">Transportation</p>
                        <p className="item-trip">{transUser?.trip?.transportation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Table>
                <thead className="table-head"></thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <p className="data-table-total">Total</p>
                    </td>
                    <td>
                      <p className="data-table-total">:</p>
                    </td>
                    <td>
                      <p className="data-table-total-p">
                        IDR. {transUser?.total?.toLocaleString()}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={hideModal}
            style={{ heigh: "35px" }}
          >
            Close
          </Button>
          {/*<Button variant="success" onClick={props.hideModal}>
            Approve
  </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalListTransaction;
