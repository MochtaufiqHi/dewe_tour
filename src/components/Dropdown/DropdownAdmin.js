import Dropdown from 'react-bootstrap/Dropdown';
import elip from '../../assets/img/Ellipse.png'
import journey from '../../assets/img/journey.png'
import logout from '../../assets/img/logout.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../../context/useContext'

function DropdownAdmin() {
  let navigate = useNavigate()
  const [_, dispatch] = useContext(UserContext)

  const logoutAdmin = () => {
    dispatch({
      type: 'LOGOUT'
    })
    navigate("/")
    window.location.reload()
  } 

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" style={{border:"none", height:"74px"}}>
        <div className="mt-1">
          <img src={elip} alt="..."/>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="" style={{top:"80px", left:"-80px"}}>
        <Dropdown.Item  className='d-flex'>
          <div className='d-flex border-bottom border-1 border-dark'>
            <Link to="/income-trip">
              <img src={journey} alt="income-trip" style={{objectFit:"contain"}}/>
            </Link>
            <Link to="/income-trip">
              <p className='mx-3 mt-2 text-dark'>Pay</p>
            </Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className='d-flex'>
          <div className='d-flex border-bottom border-1 border-dark'>
            {/* <Link to="/transaction"> */}
            <button onClick={(() => {
              // localStorage.removeItem('data')
              // window.location.reload()
            })}>
              <img src={logout} alt="logout" style={{objectFit:"contain"}}/>
            </button>
            {/* </Link> */}
            <Link onClick={logoutAdmin}>
              <p className='mx-3 mt-2 text-dark'>Logout</p>
            </Link>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
  );
}

export default DropdownAdmin