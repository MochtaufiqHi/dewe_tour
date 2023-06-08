import imglogo from "../../assets/img/Icon2.png";
import resi from "../../assets/img/resi.png";
import Table from "react-bootstrap/Table";
import { useContext, useState } from "react";
import { UserContext } from "../../context/useContext";
import { API } from "../../config/api";
import { useQuery } from "react-query";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PaymentDate() {
  const [state] = useContext(UserContext);

  let { data: user } = useQuery("userCache", async () => {
    const response = await API.get("/user/" + state.user.id);
    return response.data.data;
  });

  let { data: transUser } = useQuery("transUserCache", async () => {
    const response = await API.get("/transaction-user/" + state.user.id);
    return response.data.data;
  });

  // console.log(tran)
  // console.log(transUser)
  // console.log(transUser)

  return (
    <>
      {transUser?.map((data) => {
        return (
          <div className="border border-dark rounded my-4">
            <div className="my-2">
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="d-flex mx-5 my-2">
                    <img src={imglogo} alt="..." className="logo" />
                  </div>
                  <div className="mx-5 my-2 div-date">
                    <p className="mb-1 div-p1">Booking</p>
                    <p className="div-p2">
                      <span style={{ fontWeight: "900" }}>Saturday</span>, 22
                      July 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="container p-0 border">
                <div className="container d-flex flex-wrap justify-content-between">
                  <div className="mt-4 coloum-div">
                    <p className="div-tittle">{data.trip.title}</p>
                    <p className="country">{data.trip.country.name}</p>
                    <p className="waiting">{data.status}</p>
                  </div>
                  <div
                    className="d-flex mt-4"
                    style={{ width: "33%", justifyContent: "space-around" }}
                  >
                    <div>
                      <div className="mb-5">
                        <p className="info-trip">Date Trip</p>
                        <p className="item-trip">{data.trip.dateTrip}</p>
                      </div>
                      <div>
                        <p className="info-trip">Accomodation</p>
                        <p className="item-trip">{data.trip.acommodation}</p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-5">
                        <p className="info-trip">Duration</p>
                        <p className="item-trip">
                          {data.trip.day} Day {data.trip.night} Nights
                        </p>
                      </div>
                      <div>
                        <p className="info-trip">Transportion</p>
                        <p className="item-trip">{data.trip.transportation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 coloum-div">
                    <div className="container">
                      <div className="d-flex justify-content-end">
                        <img src={resi} alt="..." className="img-resi" />
                      </div>
                      <p
                        className="text-end my-4"
                        style={{ marginRight: "50px" }}
                      >
                        upload payment proof
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0">
              <Table>
                <thead className="table-head">
                  <tr>
                    <th></th>
                    <th></th>
                    <th>
                      <p>No</p>
                    </th>
                    <th>
                      <p>Full Name</p>
                    </th>
                    <th>
                      <p>Gender</p>
                    </th>
                    <th>
                      <p>Phone</p>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <p className="data-table-user">1</p>
                    </td>
                    <td>
                      <p className="data-table-user">{data.user.fullname}</p>
                    </td>
                    <td>
                      <p className="data-table-user">Male</p>
                    </td>
                    <td>
                      <p className="data-table-user">{data.user.phone}</p>
                    </td>
                    <td>
                      <p className="data-table-set">Qty</p>
                    </td>
                    <td>
                      <p className="data-table-set">:</p>
                    </td>
                    <td>
                      <p className="data-table-set">{data.counterQty}</p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
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
                      <p className="data-table-total-p">IDR. {data.total}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          
          // <Card className="m-4">
          //   <Card.Header as="h5">Featured</Card.Header>
          //   <Card.Body>
          //     <Card.Title>Special title treatment</Card.Title>
          //     <Card.Text>
          //       With supporting text below as a natural lead-in to additional content.
          //     </Card.Text>
          //     <Button variant="primary">Go somewhere</Button>
          //   </Card.Body>
          // </Card>
        );
      })}
    </>
  );
}

export default PaymentDate;
