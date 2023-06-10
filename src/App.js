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
import AddCountry from './pages/AddCountry'
import WaitingPayment from './pages/WaitingPayment'
import { API, setAuthToken } from './config/api'
import { useNavigate } from 'react-router-dom'
import { PrivateRouteAdmin, PrivateRouteLogin, PrivateRouteUser } from './pages/PrivateRoute'
import { UserContext } from './context/useContext'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

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
      setIsLoading(false)
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
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/detail/:id' element={<Detail/>} />
                  <Route element={<PrivateRouteLogin />}>
                    <Route element={<PrivateRouteUser />}>
                      <Route path='/add-country' element={<AddCountry />} />
                      <Route path='/waiting-payment' element={<WaitingPayment />} />
                      <Route path='/payment' element={<Payment />} />
                      <Route path='/profile' element={<Profile />} />
                    </Route>
                    <Route element={<PrivateRouteAdmin />}>
                      <Route path='/transaction' element={<Transaction />} />
                      <Route path='/income-trip' element={<IncomeTrip />} />
                      <Route path='/add-trip' element={<FormAddTrip />} />
                      <Route path='/add' element={<AddCountry />} />
                    </Route>
                  </Route>
                </Routes>
            </div>
          </div>
          <div className="footer my-2">
            <p className='footer-item'>Copyright @2020 Dewe Tour - Mochammad Taufiq Hidayat - NIS.All Rights reserved</p>  
          </div>
    </>    
  );
}

export default App;
