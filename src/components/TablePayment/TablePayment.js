import { useContext, useState, useEffect } from "react";
import plus from "../../assets/img/Plus.png";
import minus from "../../assets/img/Minus.png";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../../context/useContext";
import Swal from "sweetalert2";

function TablePayment() {
  const [login] = useContext(UserContext);
  // console.log(login)

  let navigate = useNavigate();
  let { id } = useParams();

  const [dataTrip, setDataTrip] = useState({});
  const [dataTrips, setDataTrips] = useState({});

  let { data: trip } = useQuery("trip123Cache", async () => {
    const response = await API.get("/trip/" + id);
    setDataTrip(response.data.data);
    return response.data.data;
  });

  console.log(dataTrip);
  const [harga, setHarga] = useState(1);

  const addPrice = () => {
    if (harga < trip?.quota) {
      setHarga(harga + 1);
    } else {
      Swal.fire("Orders exceed quota");
    }
  };

  let totalHarga = trip?.price * harga;

  const minPrice = () => {
    if (harga > 1) {
      setHarga(harga - 1);
    } else {
      Swal.fire("Minimum purchase of 1 ticket");
    }
  };

  const handleBook = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`,
        },
      };

      const data = {
        counterQty: harga,
        total: totalHarga,
        status: "waiting Approve",
        attachment: "bca.jpg",
        trip_id: trip.id,
      };

      const body = JSON.stringify(data);

      const response = await API.post("/transaction", body, config);
      console.log("transaction success : ", response);

      const token = response.data.data.token;
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });

      // navigate("/profile");
    } catch (error) {
      console.log("transaction failed : ", error);
    }
  });

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <div className="container mb-5">
        <div className="d-flex justify-content-between border-bottom border-4">
          <div>
            <p className="text-items">
              <span style={{ color: "#ffaf00" }}>
                IDR. {trip?.price?.toLocaleString()}{" "}
              </span>{" "}
              / Person
            </p>
          </div>
          <div className="d-flex">
            <button className="btn-border">
              <img
                src={minus}
                onClick={minPrice}
                className="icon-plus-minus px-3"
                alt="..."
              />
            </button>
            <p className="text-items">{harga}</p>
            <button className="btn-border">
              <img
                src={plus}
                onClick={addPrice}
                className="icon-plus-minus px-3"
                alt="..."
              />
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between border-bottom border-4">
          <div>
            <p className="text-items">Total :</p>
          </div>
          <div className="d-flex">
            <p className="price">IDR. {totalHarga?.toLocaleString()}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          {login?.role === "admin" ? (
            <div></div>
          ) : (
            <div className="bg-primary p-2 rounded text-white">
              <h4 style={{ margin: "2px 8px" }}>
                <span style={{ color: "#000" }}>Avalilable</span> :{" "}
                <b className="bg-white p-1 rounded" style={{ color: "black" }}>
                  {dataTrip?.quota}
                </b>{" "}
                Tickets
              </h4>
            </div>
          )}
          <div className="d-flex">
            {login?.role === "admin" ? (
              <div></div>
            ) : (
              <button
                className="rounded border-0 btn-booking"
                onClick={(e) => handleBook.mutate(e)}
              >
                <p className="btn-booking-text">Bookig Now</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TablePayment;
