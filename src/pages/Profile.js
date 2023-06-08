import ProfileInfo from '../components/Profile/ProfilInfo'
import PaymentDate from '../components/Payment/PaymentDate'

function Profile() {
  return(
    <>
      <div className="container">
        <ProfileInfo />
        <PaymentDate />
      </div>
    </>
  )
}

export default Profile