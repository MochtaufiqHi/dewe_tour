import React, {useEffect, useState} from 'react';
// import * as ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function FormLoginq(props) {
  const [login, setLogin] = useState(true)
  props.login(login)

  // console.log(isLogin)
  // console.log(handleLogin)
  // const [isLogin, setIsLogin] = useState(false)

  // const handleLogin = (e) => {
  //   getData(isLogin)
  // }
  // const handleLogout = () => setIsLogin(false)

  // const [isLogin, setIsLogin] = useState(false)

  // const data = [{
  //   email: "",
  //   password: "",
  //  }]

  // const email = document.getElementById("email").value
  // const password = document.getElementById("password").value

  // const [data, setData] = useState({
  //   isLogin: false,
  //   user: {
  //     email: "",  
  //     password: "",
  //   }
  // })

  // const [data, setData] = useState()
  


  // const setlogin = () => setIsLogin(true)
  // const setlogout = () => setIsLogin(false)

  // useEffect(() => {
    // localStorage.setItem('data', JSON.stringify(data)) const [loginCatch, setLoginCatch] = useState()
    // const [loginCatch, setLoginCatch] = useState()
    // function getCatchLogin(value) {
    //   setLoginCatch(value)
    // }
  //   console.log("Component Updating")
  //   console.log(data)
  // }, [data])
  
  // const [loginCatch, setLoginCatch] = useState()
  // function getCatchLogin(value) {
  //   setLoginCatch(value)
  // }

  // console.log(loginCatch)


  // useEffect(() => {
  //   console.log("Component Mounting")
  //   console.log(data)
  //   //eslint-disable-next-line
  // }, [])

  // function handleOnChange(e) {
  //   setData({
  //     ...data,
  //     user: {
  //       [e.target.id]: e.target.value,
  //     }
  //   })
  // }

  function handleOnSubmit(e) {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    console.log(data)
    console.log(email)
    console.log(password)

    setData({
      isLogin: true,
      user: {
        email: email,
        password: password,
      }
    })
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
        {/* <Modal.Header style={{width:"400px"}}> */}
          <Modal.Title style={{margin:"2px auto"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              {/* <button onClick={()=> setLogin(10000)}>coba</button> */}
              <Form.Control
                id="email"
                type="email"
                autoFocus
                // onChange={handleOnChange}
                // value={data.email}
                // onChange={(e) =>{setData({...data, user:{email: e.target.value}})}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                id="password"
                type="password"
                rows={3} 
                // onChange={handleOnChange}
                // value={data.password}
                // onChange={(e)=>{setData({...data, user:{password: e.target.value}})}}
              />
            </Form.Group>
            <Modal.Footer>
              <Button className="w-100" style={{backgroundColor:"orange", border:"none", color:"white"}} type="submit" onClick={() => setLogin(true)}>
                Login
              </Button>
              {/* <Button variant="primary" onClick={props.handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Form>
        </Modal.Body>
          <Form.Label className='m-4 text-center'>Don't have an account? ? <span>Click Here</span></Form.Label>
      </Modal>
    </>
  );
}

export default FormLoginq