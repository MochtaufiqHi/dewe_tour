import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Icon.png'
import FormLogin from '../Login/Login'
import { useState, useEffect, useContext } from 'react';
import FormRegister from '../Register/Register';
import DropdownProfile from '../Dropdown/Dropdown';
import DropdownAdmin from '../Dropdown/DropdownAdmin';
import { UserContext } from '../../context/useContext';
// import { useNavigate } from 'react-router-dom';
// import { API, setAuthToken } from '../../config/api';
// import jwtDecode from 'jwt-decode';

const login = JSON.parse(localStorage.getItem('data'))


function Navigation() {
  const [state, dispatch] = useContext(UserContext)
  var user = state.role
  var login = state.isLogin
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reg, setReg] = useState(false);

  const handleRegClose = () => setReg(false);
  const handleRegShow = () => setReg(true);

  const [data, setData] = useState();

  useEffect(() =>{
    const dataUser = JSON.parse(localStorage.getItem('data'));
    if(dataUser) {
      setData(dataUser)
    }
  }, [])  

  return (
    <>
    <Navbar className='py-0 bg-dark navItem'>
      <nav className="navbar bg-body-tertiary navbar-expand-lg w-100 nav-back">
        <div className="container d-flex justify-content-between">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <nav className="d-flex" role="search">
            {login && user === "user" ? 
              <div>
                <DropdownProfile />
              </div> : login && user === "admin" ? <DropdownAdmin /> :
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