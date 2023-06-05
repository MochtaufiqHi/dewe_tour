import  {useMutation} from 'react-query'
import {useState} from 'react'
import { API } from '../../config/api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Alert} from 'react-bootstrap'

import palm from '../../assets/img/palm.png'
import hibicus from '../../assets/img/hibiscus.png'


function FormRegister({show, handleRegClose}) {
// eslint-disable-next-line
  const [messagge, setMessage] = useState(null)

  const [form, setForm] = useState([{
      fullname: '',
      email: '',
      password: '',
      phone: '',
      address: '',
  }])

  // set config

//  const config = {
  //  headers: {
    //  'Content-type': 'apllication/json'
   // },
 // }

  function handleOnchange(e) {
    setForm({
      ...form,
        [e.target.name]: e.target.value,
    })
  }


  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      handleRegClose()

      //get response from server
      const response = await API.post('/register', form)
      console.log("register success : ", response)

      setForm({
        fullname: '',
        email: '',
        password: '',
        phone: '',
        address: '',
      })
      alert("Register success")
    } catch (error) {
      alert("Register Failed")
      console.log("Register failed : ", error)
    }
  })

  return (
    <>
      <Modal show={show} onHide={handleRegClose} scrollable="true" className='d-relative'>
        <Modal.Body className='m-4'>
          <Modal.Title className='mb-4 text-center' style={{fontWeight:"700", fontSize:"36px"}}>Register</Modal.Title>
          <Form onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <Form.Group className="mb-3">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Full Name</Form.Label>
              <Form.Control
                name="fullname"
                type="input"
                onChange={handleOnchange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={handleOnchange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnchange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Phone</Form.Label>
              <Form.Control
                type="input"
                name="phone"
                onChange={handleOnchange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Address</Form.Label>
              <Form.Control
                type="input"
                name="address"
                onChange={handleOnchange}
                autoFocus
              />

            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{fontWeight:"800", fontSize:"24px"}}>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
            <Button variant="secondary" type="submit" className="w-100 border border-none" style={{backgroundColor:"#ffaf00"}}>
              Register
            </Button>
          </Form>
          <Button variant="secondary" onClick={handleRegClose} className="w-100 border border-none" style={{backgroundColor:"#ffaf00"}}>
            Close
          </Button>
        </Modal.Body>
          <img src={palm} alt="..." style={{position:"absolute"}}/>
          <img src={hibicus} alt="..." style={{position:"absolute", right:"0px"}}/>
      </Modal>
    </>
  );
}

export default FormRegister
