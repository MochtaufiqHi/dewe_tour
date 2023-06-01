import Dropdown from 'react-bootstrap/Dropdown';
import elip from '../../assets/img/Ellipse.png'
import user from '../../assets/img/user.png'
import pay from '../../assets/img/bill.png'
import logout from '../../assets/img/logout.png'
import { Link } from 'react-router-dom';



function DropdownProfile(props) {
  return (
    <Dropdown style={{}}>

      <Dropdown.Toggle variant="" id="dropdown-basic" style={{border:"none", height:"74px"}}>
        <div className="mt-1">
          <img src={elip} alt="..."/>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="" style={{top:"80px", left:"-80px"}}>
        <Dropdown.Item className='d-flex'>
          <div className='d-flex border-bottom border-1 border-dark'>
            <Link to="/profile">
              <img src={user} alt="user profile" style={{objectFit:"contain"}}/>
            </Link>
            <Link to="/profile">
              <p className='mx-3 mt-2 text-dark'>Profile</p>
            </Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item  className='d-flex'>
          <div className='d-flex border-bottom border-1 border-dark'>
            <Link to="/payment">
              <img src={pay} alt="payment" style={{objectFit:"contain"}}/>
            </Link>
            <Link to="/payment">
              <p className='mx-3 mt-2 text-dark'>Pay</p>
            </Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className='d-flex'>
          <div className='d-flex border-bottom border-1 border-dark'>
            <Link>
              <button onClick={(() => {
                localStorage.removeItem('data')
                window.location.reload()
              })}>
              {/* <Link to='/'> */}
                <img src={logout} alt="logout" style={{objectFit:"contain"}}/>
              {/* </Link>   */}
              </button>
            </Link>
            <Link>
              <p className='mx-3 mt-2 text-dark'>Logout</p>
            </Link>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownProfile