import Form from 'react-bootstrap/Form';
import { useMutation } from 'react-query';
import { useState, useEffect } from "react";
import { API } from '../config/api';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function AddCountry() {
  let navigate = useNavigate();
  const [form, setForm] = useState('')

  const handleChange = (e) => {
    setForm(e.target.value)
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-type": "application/json ",
          "Authorization": `Bearer ${localStorage.token}`,
        },
      };

      const body = JSON.stringify({ name: form });

      const response = await API.post("/country", body, config)
      console.log("add country success : ", response)

      navigate("/income-trip")
    } catch (error) {
      console.log("add country failed : ", error)
    }
  })

  console.log(form)
  return (
    <>
      <div className='container p-5' style={{height:"465px"}}>
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
          <Form.Label>Add Country</Form.Label>
          <Form.Control
            type="input"
            name="name"
            onChange={handleChange}
          />
          <button 
            className='my-4 rounded p-2'
            style={{
              width: "250px",
              backgroundColor: "orange",
              border: "none",
              color: "#fff",
            }}
            type="submit">Add</button>
        </Form>
      </div>
    </>
  )
}

export default AddCountry;