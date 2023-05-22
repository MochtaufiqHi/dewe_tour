import React, { useEffect, useState } from 'react';
// import * as ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import DropdownProfile from '../Dropdown/Dropdown';

import palm from '../../assets/palm.png'
import hibicus from '../../assets/hibiscus.png'

function FormLogin(props) {
  const [data, setData] = useState({
    isAdmin: false,
    isLogin: false,
    user: {
      email: '',
      password: '',
    }
  })

  function handleOnChange(e) {
    setData({
      ...data,
        user: {
          [e.target.id]: e.target.value,
        }
    })
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    // console.log(email)
    // console.log(password)

    if(email === "user@gmail.com" && password === "123") {
      setData({
        isAdmin: false,
        isLogin: true,
        user: {
          email: email,
          password: password,
        }
      })
    } else if(email === "admin@gmail.com" && password === "123") {
      setData({
        isAdmin: true,
        isLogin: false,
        user: {
          email: email,
          password: password,
        }
      }) 
    } else {
      setData({
        isAdmin: false,
        isLogin: false,
      })
      alert("Account not found please try again")
    }
  }

  useEffect(() => {
    props.setIsLogin(data.isLogin)
    props.setIsAdmin(data.isAdmin)
  },[data])

  const wrapperFunction = () => {
    props.handleClose()
    // setLogin()

  }

  console.log(data.isLogin)
  console.log(data.isAdmin)

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} style={{}} className="d-relative">
        {/* <Modal.Header> */}
        {/* <Modal.Header style={{width:"400px"}}> */}
        {/* </Modal.Header> */}
        <Modal.Title style={{margin:"51px auto"}}>Login</Modal.Title>
        <Modal.Body style={{alignItems:"center", marginLeft:"20px"}}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
              <Form.Label style={{margin:"2px 40px"}}>Email</Form.Label>
              {/* <button onClick={()=> setLogin(10000)}>coba</button> */}
              <Form.Control
                style={{margin:"2px 40px", width:"350px"}}
                id="email"
                type="email"
                autoFocus
                onChange={handleOnChange}
                // value={data.email}
                // onChange={(e) =>{setData({...data, user:{email: e.target.value}})}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label style={{margin:"2px 40px"}}>Password</Form.Label>
              <Form.Control 
                style={{margin:"2px 40px", width:"350px"}}
                id="password"
                type="password"
                rows={3} 
                onChange={handleOnChange}
                // value={data.password}
                // onChange={(e)=>{setData({...data, user:{password: e.target.value}})}}
              />
            </Form.Group>
            {/* <Modal.Footer> */}
              {/* <Button className="w-100" style={{backgroundColor:"orange", border:"none", color:"white"}} type="submit" onClick={() => {setLogin(); handleClose();}}>
               */}
              <Button className="" style={{backgroundColor:"orange", border:"none", color:"white", margin:"2px 40px", width:"350px"}} type="submit" onClick={wrapperFunction}> 
                Login
              </Button>
              {/* <Button variant="primary" onClick={props.handleClose}>
                Save Changes
              </Button> */}
            {/* </Modal.Footer> */}
          </Form>
          <Form.Label className='m-5 text-center' style={{paddingLeft:"40px"}}>Don't have an account? ? <span>Click Here</span></Form.Label>
        </Modal.Body>
          <img src={palm} alt="..." style={{position:"absolute"}}/>
          <img src={hibicus} alt="..." style={{position:"absolute", right:"0px"}}/>
      </Modal>
      {/* <DropdownProfile isLogin={data.isLogin} setIsLoginFromChild={setIsLoginFromChild}/> */}
    </>
  );
}

export default FormLogin