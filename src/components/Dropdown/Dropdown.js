import Dropdown from 'react-bootstrap/Dropdown';
import elip from '../../assets/img/Ellipse.png'
import user from '../../assets/img/user.png'
import pay from '../../assets/img/bill.png'
import logout from '../../assets/img/logout.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../context/useContext'



function DropdownProfile(props) {
  let navigate = useNavigate()
  const [_, dispatch] = useContext(UserContext)

  const logoutUser = () => {
    dispatch({
      type: 'LOGOUT'
    })
    navigate("/")
    window.location.reload()
  } 


  return (
    <Dropdown style={{}}>

      <Dropdown.Toggle variant="" id="dropdown-basic" style={{border:"none", height:"90px"}}>
        <div className="mt-1">
          <img src={elip} alt="..."/>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="" style={{top:"80px", left:"-80px"}}>
        <Dropdown.Item className='d-flex'>
          <div className='d-flex'>
            <Link to="/profile" >
              <img src={user} alt="user profile" style={{objectFit:"contain"}}/>
            </Link>
            <Link to="/profile" className='text-decoration-none'>
              <p className='mx-3 mt-2 text-dark'>Profile</p>
            </Link>
          </div>
        </Dropdown.Item>
        {/* <Dropdown.Item  className='d-flex'>
          <div className='d-flex'>
            <Link to="/payment">
              <img src={pay} alt="payment" style={{objectFit:"contain"}}/>
            </Link>
            <Link to="/payment" className='text-decoration-none'>
              <p className='mx-3 mt-2 text-dark'>Pay</p>
            </Link>
          </div>
        </Dropdown.Item> */}
        <Dropdown.Item className='d-flex'>
          <div className='d-flex'>
            <Link onClick={logoutUser}>
                <img src={logout} alt="logout" style={{objectFit:"contain"}}/>
            </Link>
            <Link onClick={logoutUser} className='text-decoration-none'>
              {/* Logout */}
              <p className='mx-3 mt-2 text-dark text-decoration-none'>Logout</p>
            </Link>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownProfile