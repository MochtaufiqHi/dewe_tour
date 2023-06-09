import ButtonAddTrip from "../components/AddTrip/ButtonAddTrip";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { useState } from "react";
import "../components/Item/index.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function IncomeTrip() {
  const [trip, setTrip] = useState();
  const [index, setIndex] = useState();
  let navigate = useNavigate()

  let { data: trips } = useQuery("tripsssssCache", async () => {
    const response = await API.get("/trip");
    setTrip(response.data.data);
    return response.data.data;
  });

  console.log(trip)

  // Modal Confirm delete data
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleOnDelete = useMutation(async (tripId) => {
    try {
      await API.delete(`/trip/${index}`);
      Swal.fire(
        'Succes Delete',
        `Trip deleted successfully`,
        'success'
      )
      handleClose()
      navigate('income-trip')
    } catch (err) {
      Swal.fire(
        'Failed Delete',
        `Trip failed to deleted `,
        'error'
      )
      console.log(err);
    }
  });

  return (
    <>
      <div className="container">
        <ButtonAddTrip />
        <div
          className="d-flex justify-content-center w-100"
          style={{ flexWrap: "wrap", flexShrink: "inherit" }}
        >
          {trip?.map((data, index) => (
            <div
              key={index}
              className="card position-relative m-3 shadow"
              style={{ height: "340px" }}
            >
              <p className="position-absolute pages end-0">{data.quota}</p>
              <img
                src={data?.image}
                alt="Destination"
                style={{ width: "320px", margin: "0px auto", height: "180px" }}
              ></img>
              <div className="card-body mx-2">
                <Link
                  to={`/detail/${data.id}`}
                  style={{ textDecorationLine: "none", color: "black" }}
                >
                  <h5 style={{ marginLeft: "10px", marginTop: "12px" }}>
                    {data.title.substring(0, 28)}...
                  </h5>
                  {/* <h5>{data.title}</h5> */}
                  {/* <h5 className="card-title my-3">{data.title}< /h5> */}
                </Link>
                <div className="d-flex justify-content-between w-100">
                  <p className="price">IDR. {data.price.toLocaleString()}</p>
                  <p className="country">{data?.country.name}</p>
                </div>
                <div className="d-flex justify-content-evenly w-100">
                  <button className="rounded text-light bg-primary border border-none px-3">
                    Update
                  </button>
                  <button
                    className="rounded text-light bg-warning border border-none px-3"
                    onClick={() => {
                      handleShow()
                      setIndex(data.id)
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this trip ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {handleOnDelete.mutate()}}>
            Delete Trip
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IncomeTrip;
