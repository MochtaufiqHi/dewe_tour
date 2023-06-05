import Form from 'react-bootstrap/Form';
import { useMutation } from 'react-query';
import { useState, useEffect } from "react";
import { API } from '../config/api';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function AddCountry() {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    country: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("name", form.country)

      const response = await API.post("/country", formData, config)
      console.log("add country success : ", response)

      Navigate("/income-trip")
    } catch (error) {
      console.log("add country failed : ", error)
    }
  })

  return (
    <>
      <div className='container p-5'>
        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
          <Form.Label>Add Country</Form.Label>
          <Form.Control
            type="input"
            name="country"
            onClick={handleChange}
          />
          <button 
            className='my-4 rounded'
            type="submit">Add</button>
        </Form>
      </div>
    </>
  )
}

export default AddCountry