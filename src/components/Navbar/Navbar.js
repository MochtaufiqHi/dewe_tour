import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Icon.png'
import FormLogin from '../Login/Login'
import { useState, useEffect } from 'react';
import FormRegister from '../Register/Register';
import DropdownProfile from '../Dropdown/Dropdown';
import DropdownAdmin from '../Dropdown/DropdownAdmin';

const login = JSON.parse(localStorage.getItem('data'))


function Navigation() {
  console.log(login);
  console.log(login?.isLogin)
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
            {login?.isLogin ? 
              <div>
                <DropdownProfile />
              </div> : login?.isAdmin ? <DropdownAdmin /> :
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