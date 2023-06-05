import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

import './App.css'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Payment  from './pages/Payment'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'
import FormAddTrip from './pages/FormAddTrip'
import Navigation from './components/Navbar/Navbar'
import IncomeTrip from './pages/IncomeTrip'
import WaitingPayment from './pages/WaitingPayment'
// import PrivateRoute from './pages/PrivateRoute'
import Auth from './pages/Auth'
import { API, setAuthToken } from './config/api'
import { useNavigate } from 'react-router-dom'
import { PrivateRouteAdmin, PrivateRouteLogin, PrivateRouteUser } from './pages/PrivateRoute'
import { UserContext } from './context/useContext'
import AddCountry from './pages/AddCountry'

function App() {
  let navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  console.log(state)

  useEffect(() => {
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate('/')
      }
    }
  }, [isLoading])

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      checkUser()
    } else {
      setIsLoading(false)
    }
  }, [])

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth")
      console.log("check user success : ", response)

      let payload = response.data.data

      payload.token = localStorage.token

      dispatch({
        type: 'USER_SUCCESS',
        payload,
      })
    } catch (error) {
      console.log("check user failed : ", error)
      dispatch({
        type: 'AUTH_ERROR',
      })
      setIsLoading(false)
    }
  }

  return isLoading ? null: (
    <>
          <div className='home-pages'>
            <Navigation />
            
            <div className=''>
              
                <Routes>
                  {/* <Route path='/auth' element={<Auth />} /> */}
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/detail/:id' element={<Detail/>} />
                  <Route element={<PrivateRouteLogin />}>
                    <Route element={<PrivateRouteUser />}>
                      <Route exact path='/add-country' element={<AddCountry />} />
                      <Route exact path='/waiting-payment' element={<WaitingPayment />} />
                      <Route exact path='/payment' element={<Payment />} />
                      <Route exact path='/profile' element={<Profile />} />
                    </Route>
                  </Route>
                    <Route element={<PrivateRouteAdmin />}>
                      <Route exact path='/transaction' element={<Transaction />} />
                      <Route exact path='/income-trip' element={<IncomeTrip />} />
                      <Route exact path='/add-trip' element={<FormAddTrip />} />
                    </Route>
                </Routes>
            </div>
          </div>
          {/* <button onClick={checkUser} >
              onclick
            </button> */}
          <div className="footer my-2">
            <p className='footer-item'>Copyright @2020 Dewe Tour - Mochammad Taufiq Hidayat - NIS.All Rights reserved</p>  
          </div>
        {/* </Router> */}
      {/* // } */}
    </>    
  );
}

export default App;
