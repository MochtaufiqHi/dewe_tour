import resi from "../../assets/img/resi.png";
import "./index.css";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { useContext } from "react";
import { UserContext } from "../../context/useContext";

function PaymentItem() {
  const [state] = useContext(UserContext);

  let { data: user } = useQuery("userCache", async () => {
    const response = await API.get("/user/" + state.user.id);
    return response.data.data;
  });

  let { data: transUser } = useQuery("transUserCache", async () => {
    const response = await API.get("/transaction-user/" + state.user.id);
    return response.data.data;
  });

  return (
    <>
      {transUser?.map((data) => {
        return (
          <div>
            <div>
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
          </div>
        );
      })}
    </>
  );
}

export default PaymentItem;
