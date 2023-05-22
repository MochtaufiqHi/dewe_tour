import ProfileInfo from '../components/Profile/ProfilInfo'
import Payment from '../pages/Payment'

function Profile() {
  return(
    <>
      <div className="container">
        <ProfileInfo />
        <Payment />
      </div>
    </>
  )
}

export default Profile