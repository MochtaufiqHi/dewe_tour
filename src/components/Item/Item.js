import { Link } from "react-router-dom";
import "./index.css";

import { useQuery } from "react-query";
import { API } from "../../config/api";
import { useState } from "react";

function Item(props) {
  const [trip, setTrip] = useState()

  let { data: trips } = useQuery("tripsCache", async () => {
    const response = await API.get("/trip");
    setTrip(response.data.data)
    return response.data.data;
  });
  // console.log(trips?.[0].country?.name);
  console.log(props.search);
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ flexWrap: "wrap", flexShrink: "inherit" }}
      >
        {trip?.filter((data) => {
          if (props.search == "") {
            return data
          } else if (data?.country?.name?.toLowerCase().includes(props?.search?.toLowerCase())) {
            return data
          } else if (data?.title?.toLowerCase().includes(props?.search?.toLowerCase())) {
            return data
          }
        }).map((data, index) => (
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
    </>
  );
}

export default Item;
