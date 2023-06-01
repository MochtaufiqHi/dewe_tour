import './index.css'

import logo1 from '../../assets/img/perfomence1.png'
import logo2 from '../../assets/img/perfomence2.png'
import logo3 from '../../assets/img/perfomence3.png'
import logo4 from '../../assets/img/perfomence4.png'

  const dataPerformence = [
  {
    logo: logo1,
    tittle: "Best Price Guarantee",
    text: "A small river named Duren flows by their place and supplies"
  },
  {
    logo: logo2,
    tittle: "Travellers Love Us",
    text: "A small river named Duren flows by their place and supplies"
  },
  {
    logo: logo3,
    tittle: "Best Travel Agent",
    text: "A small river named Duren flows by their place and supplies"
  },
  {
    logo: logo4,
    tittle: "Our Dedicated Support",
    text: "A small river named Duren flows by their place and supplies"
  },
]

function Card() {
  return (
    <>
      <div className="d-flex justify-content-center cnt-card text-center">
        {dataPerformence.map((data, index) => (
          <div className="card m-3" style={{width:"210px"}} key={index}>
            <img src={data.logo} className="card-img-top w-25" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{data.tittle}</h5>
              <p className="card-text mb-2">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card