import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./index.css"

import palm from '../../assets/img/palm.png'
import hibicus from '../../assets/img/hibiscus.png'
import { useNavigate } from 'react-router-dom';

function FormLogin(props) {
  // state
  const [data, setData] = useState([{
    isAdmin: false,
    isLogin: false,
    user: {
      email: '',
      password: '',
    }
  }])

  function handleOnChange(e) {
    setData({
      ...data,
        user: {
          [e.target.id]: e.target.value,
        }
    })
  }
  const Navi = useNavigate()

  function handleOnSubmit(e) {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    if(email === "user@gmail.com" && password === "123") {
      setData({
        isAdmin: false,
        isLogin: true,
        user: {
          email: email,
          password: password,
        }
      })
      window.location.reload()
    } else if(email === "admin@gmail.com" && password === "123") {
      setData({
        isAdmin: true,
        isLogin: false,
        user: {
          email: email,
          password: password,
        }
      }) 
      // window.location.reload('/transaction')
      Navi('/transaction')
      window.location.reload()
    } else {
      setData({
        isAdmin: false,
        isLogin: false,
      })
      alert("Account not found please try again")
    }
  }

  useEffect(() => {
    if(data.isAdmin || data.isLogin){
      localStorage.setItem('data', JSON.stringify(data))
    } 

    // props.setIsLogin(data.isLogin)
    // props.setIsAdmin(data.isAdmin)
  },[data])

  const wrapperFunction = () => {
    props.handleClose()
  }

  console.log(data.isLogin)
  console.log(data.isAdmin)

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} style={{}} className="d-relative">
        <Modal.Title className='modal-tittle'>Login</Modal.Title>
        <Modal.Body className='modal-body'>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className='modal-label'>Email</Form.Label>
              <Form.Control
                className='modal-control'
                id="email"
                type="email"
                autoFocus
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label className='modal-label'>Password</Form.Label>
              <Form.Control 
                className='modal-control'
                id="password"
                type="password"
                rows={3} 
                onChange={handleOnChange}
              />
            </Form.Group>
              <Button className="modal-btn" type="submit" onClick={wrapperFunction}> 
                Login
              </Button>
              {/* <Button className="modal-btn"  onClick={() => Navi('/transaction')}> 
                test
              </Button> */}
          </Form>
          <Form.Label className='m-5 text-center modal-click' >Don't have an account? ? <span>Click Here</span></Form.Label>
        </Modal.Body>
          <img src={palm} alt="..." className='modal-img'/>
          <img src={hibicus} alt="..." className='modal-img-hibi'/>
      </Modal>
    </>
  );
}

export default FormLogin