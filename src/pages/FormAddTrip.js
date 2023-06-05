import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { API } from "../config/api";
import { useMutation } from "react-query";

function FormAddTrip() {
  const title = "Country admin";
  document.title = "Dumbtour | " + title;

  let navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    acommodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    date_trip: "",
    price: "",
    quota: "",
    description: "",
    image: "",
    country_id: "",
  });

  const getCountry = async () => {
    try {
      const response = await API.get("/country");
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });

    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      //configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          "Authorization": `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("acommodation", form.acommodation);
      formData.set("transportation", form.transportation);
      formData.set("eat", form.eat);
      formData.set("day", form.day);
      formData.set("night", form.night);
      formData.set("dateTrip", form.dateTrip);
      formData.set("price", form.price);
      formData.set("quota", form.quota);
      formData.set("description", form.description);
      formData.set("image", form.image[0], form.image[0].name);
      // let country_id = form.country_id.map((country_id) => Number(country_id+1));
      // formData.set("country_id", JSON.stringify(country_id));
      formData.set("country_id", form.country_id);

      // insert trip data
      const response = await API.post("/trip", formData, config);
      console.log("add trip success :", response);

      navigate("/income-trip");
    } catch (error) {
      console.log("add trip failed : ", error);
    }
  });

  useEffect(() => {
    getCountry();
  }, []);

  console.log(form);

  return (
    <div className="container my-5">
      <p style={{ fontWeight: "800", fontSize: "36px" }}>Add Trip</p>
      <Form id="mySwitch" onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Tittle Trip</Form.Label>
          <Form.Control name="title" type="input" onChange={handleChange} />
        </Form.Group>

        <Form.Label>Country</Form.Label>
        <Form.Select
          aria-label="Default select example"
          style={{ backgroundColor: "#b1b1b1" }}
          name="country_id"
          onClick={handleChange}
        >
          {/* <option>Select Country</option> */}
          {countries.map((item, index) => {
            return (
              <option
                value={item?.id}
              >
                {item.name}
              </option>
            );
          })}
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Acomodation</Form.Label>
          <Form.Control
            type="input"
            name="acommodation"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Transportation</Form.Label>
          <Form.Control
            type="input"
            name="transportation"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Eat</Form.Label>
          <Form.Control type="input" name="eat" onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Duration</Form.Label>
          <div className="d-flex align-items-center">
            <div>
              <Col sm="">
                <Form.Control type="input" name="day" onChange={handleChange} />
              </Col>
            </div>
            <div className="px-3 mb-2">
              <Form.Label column sm="">
                Day
              </Form.Label>
            </div>
            <div>
              <Col sm="">
                <Form.Control
                  type="input"
                  name="night"
                  onChange={handleChange}
                />
              </Col>
            </div>
            <div className="px-3 mb-2">
              <Form.Label column sm="">
                Night
              </Form.Label>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date Trip</Form.Label>
          <Form.Control type="input" name="dateTrip" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="input" name="price" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Quota</Form.Label>
          <Form.Control type="input" name="quota" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            onChange={handleChange}
            as="textarea"
            rows={3}
            style={{ backgroundColor: "#b1b1b1" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Image</Form.Label>
          <Col sm="3">
            <Form.Control type="file" name="image" onChange={handleChange} />
            {preview && (
              <div>
                <img
                  src={preview}
                  style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                  alt={preview}
                />
              </div>
            )}
          </Col>
        </Form.Group>
        <div
          className="d-flex"
          style={{ margin: "0px auto", justifyContent: "space-around" }}
        >
          <Button
            variant="primary"
            type="submit"
            style={{
              width: "250px",
              backgroundColor: "orange",
              border: "none",
            }}
          >
            <p
              style={{
                fontWeight: "900",
                fontSize: "18px",
                marginBottom: "0px",
              }}
            >
              Add Trip
            </p>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormAddTrip;
