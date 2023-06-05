import React, { useEffect, useState, useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { Alert } from "react-bootstrap";

import palm from "../../assets/img/palm.png";
import hibicus from "../../assets/img/hibiscus.png";
// import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/useContext";

import { API, setAuthToken } from "../../config/api";

function FormLogin(props) {
  let navigate = useNavigate();

  const title = "Login";
  document.title = "DueweToure | " + title;

  const [_, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      //insert data for login
      const response = await API.post("/login", form);

      console.log("login success : ", response);

      // send data to useContext
      dispatch({
        type: "LOGIN_SUCCESS",
        role: response.data.data.role,
        payload: response.data.data,
      });

      setAuthToken(localStorage.token);

      // status checks
      if (response.data.data.role === "admin") {
        navigate("/transaction");
      } else {
        navigate("/");
      }
      alert("Login Success")
    } catch (error) {
      alert("Incorrect Email or Password Please try Again")
      console.log("Login failed : ", error);
    }
  });


  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        style={{}}
        className="d-relative"
      >
        <Modal.Title className="modal-tittle">Login</Modal.Title>
        <Modal.Body className="modal-body">
          <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <Form.Group className="mb-3">
              <Form.Label className="modal-label">Email</Form.Label>
              <Form.Control
                className="modal-control"
                name="email"
                type="email"
                autoFocus
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modal-label">Password</Form.Label>
              <Form.Control
                className="modal-control"
                name="password"
                type="password"
                rows={3}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button 
              className="modal-btn" 
              type="submit"
              onClick={props.handleClose}
            >
              Login
            </Button>
            {/* <Button className="modal-btn"  onClick={() => Navi('/transaction')}> 
                test
              </Button> */}
          </Form>
          <Form.Label className="m-5 text-center modal-click">
            Don't have an account? ? <span>Click Here</span>
          </Form.Label>
        </Modal.Body>
        <img src={palm} alt="..." className="modal-img" />
        <img src={hibicus} alt="..." className="modal-img-hibi" />
      </Modal>
    </>
  );
}

export default FormLogin;
