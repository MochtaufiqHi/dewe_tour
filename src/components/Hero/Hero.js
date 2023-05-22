import './index.css'
import hero from '../../assets/hero.png'

function Hero() {
  return(
    <div className="hero-img">
      <img src={hero} style={{width:"100%"}} />
    </div>
  )
}

export default Hero