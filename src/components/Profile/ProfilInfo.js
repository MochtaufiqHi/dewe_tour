import contact from '../../assets/img/contact.png'
import mail from '../../assets/img/mail.png'
import phone from '../../assets/img/phone.png'
import map from '../../assets/img/map.png'
import profile from '../../assets/img/profile.png'

function ProfileInfo() {
  return(
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center border-dark">
          <div className="col-5">
            <p style={{fontWeight:"900", fontSize:"36px"}}>Personal Info</p>
            <div className='d-flex'>
              <div className='p-3'>
                <img src={contact} alt="..."/>
              </div>
              <div style={{marginTop:"10px"}}>
                <p style={{marginBottom:"0px", fontWeight:"800", fontSize:"14px"}}>Radif</p>
                <p style={{fontSize:"12px", color:"#8A8C90"}}>Full Name</p>
              </div>
            </div>
            <div className='d-flex'>
              <div>
                <img className='p-3' src={mail} alt="..."/>
              </div>
              <div style={{marginTop:"10px"}}>
                <p style={{marginBottom:"0px", fontWeight:"800", fontSize:"14px"}}>radifgans@gmail.com</p>
                <p style={{fontSize:"12px", color:"#8A8C90"}}>Email</p>
              </div>
            </div>

            <div className='d-flex'>
              <div>
                <img className='p-3' src={phone} alt="..."/>
              </div>
              <div style={{marginTop:"10px"}}>
                <p style={{marginBottom:"0px", fontWeight:"800", fontSize:"14px"}}>0812-8623-8911</p>
                <p style={{fontSize:"12px", color:"#8A8C90"}}>Mobile phone</p>
              </div>
            </div>

            <div className='d-flex'>
              <div>
                <img className='p-3' src={map} alt="..."/>
              </div>
              <div style={{marginTop:"10px"}}>
                <p style={{marginBottom:"0px", fontWeight:"800", fontSize:"14px"}}>Perumahan Permata Bintaro Residence C-3</p>
                <p style={{fontSize:"12px", color:"#8A8C90"}}>Address</p>
              </div>
            </div>

          </div>
          <div className="col-5 justify-content-center">
          <div className="card" style={{width:"16rem", margin:"0px auto"}}>
            <img src={profile} className="card-img-top mb-3 rounded" alt="..." style={{margin:"0px auto"}}/>
            <div className="card-body" style={{backgroundColor:"orange"}}>
              <a href="#" className="btn btn-primary w-100" style={{backgroundColor:"orange", border:"none", borderRadius:"5px"}}>Change Photo Profile</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo