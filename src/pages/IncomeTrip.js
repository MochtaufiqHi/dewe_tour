import ButtonAddTrip from "../components/AddTrip/ButtonAddTrip";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useState } from "react";

function IncomeTrip() {
  const [trip, setTrip] = useState();

  let { data: trips } = useQuery("tripsssssCache", async () => {
    const response = await API.get("/trip");
    setTrip(response.data.data);
    return response.data.data;
  });

  return (
    <>
      <div className="container">
        <ButtonAddTrip />
        <div
          className="d-flex justify-content-center"
          style={{ flexWrap: "wrap", flexShrink: "inherit" }}
        >
          {trip?.map((data, index) => (
            <div key={index} className="card position-relative m-3">
              <p className="position-absolute pages end-0">{data.quota}</p>
              <img
                src={data?.image}
                alt="Destination"
                style={{ width: "320px", margin: "8px auto" }}
              ></img>
              <div className="card-body mx-2">
                <Link
                  to={`/detail/${data.id}`}
                  style={{ textDecorationLine: "none", color: "black" }}
                >
                  <h5>{data.title}</h5>
                  {/* <h5 className="card-title my-3">{data.title}< /h5> */}
                </Link>
                <div className="d-flex justify-content-between w-100">
                  <p className="price">IDR. {data.price.toLocaleString()}</p>
                  <p className="country">{data?.country.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IncomeTrip;
