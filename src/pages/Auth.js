import { useContext, useEffect, useState } from "react";
import { Col, Container, Row} from "react-bootstrap"
import { UserContext } from "../context/useContext"
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/Login/Login"
import FormRegister from "../components/Register/Register"

export default function Auth() {
  let navigate = useNavigate()

  const [state] = useContext(UserContext)

  const checkAuth = () => {
    if(state.isLogin) {
      navigate("/")
    }
  }

  useEffect(() => {
    checkAuth()
  },[])

  const [isRegister, setIsRegister] = useState(false)

  const switchLogin = () => {
    setIsRegister(false)
  }

  const switchRegister = () => {
    setIsRegister(true)
  }

  return (
    <div className="bg-black">
      <Container>
        <Row className="vh-100 d-flex align-items-center">
          <Col md="6">
            {/* <img src="" className="img-fluid" style={{ width: "264px", height: "264px" }} alt="brand" /> */}
            <div className="text-auth-header mt-4">Easy, Fast and Reliable</div>
            <p className="text-auth-parag mt-3">
              Go shopping for merchandise, just go to dumb merch <br /> shopping. the biggest merchandise in{" "}
              <b>Indonesia</b>
            </p>
            <div className="mt-5">
              <button onClick={switchLogin} className="btn btn-login px-5">
                Login
              </button>
              <button onClick={switchRegister} className="btn btn-register px-5">
                Register
              </button>
            </div>
          </Col>
          <Col md="6">{isRegister ? <FormRegister /> : <FormLogin />}</Col>
        </Row>
      </Container>
    </div>
  )
}