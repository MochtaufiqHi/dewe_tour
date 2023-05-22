import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/Icon.png'
import FormLogin from '../Login/Login'
import { useState } from 'react';
import FormRegister from '../Register/Register';
// import elip from '../../assets/Ellipse.png'
import DropdownProfile from '../Dropdown/Dropdown';
import DropdownAdmin from '../Dropdown/DropdownAdmin';
// import Button from 'react-bootstrap/Button'
// import icon from '../../assets/Icon.png'

function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reg, setReg] = useState(false);

  const handleRegClose = () => setReg(false);
  const handleRegShow = () => setReg(true);

  const [isLogin, setIsLogin] = useState(false)

  const [isAdmin, setIsAdmin] = useState(false)

  const handleLogin = (data) => {
    setIsLogin(data)
  }

  const handleAdmin = (data) => {
    setIsAdmin(data)
  }


  return (
    <>
    <Navbar className='py-0 bg-dark navItem'>
      <nav className="navbar bg-body-tertiary navbar-expand-lg w-100 nav-back">
        <div className="container d-flex justify-content-between">
          {/* <a href='/'>
          </a> */}
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <nav className="d-flex" role="search">
            {isLogin ? 
              <div>
                <DropdownProfile />
              </div> : isAdmin ? <DropdownAdmin /> :
              <div>
                <button className="btn btn-outline-light mx-2 login" type="submit" onClick={handleShow}>Login</button><button className="btn register" type="submit" onClick={handleRegShow}>Register</button>
              </div>
            }
          </nav>
        </div>
      </nav>
    </Navbar>
    <FormLogin 
      handleClose={handleClose} 
      handleShow={handleShow} 
      show={show}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      handleLogin={handleLogin}
      isAdmin={isAdmin}
      handleAdmin={handleAdmin}
      setIsAdmin={setIsAdmin}
    />
    <FormRegister 
      handleRegClose={handleRegClose} 
      handleRegShow={handleRegShow} 
      show={reg} 
    />
    </>
  );
}

export default Navigation