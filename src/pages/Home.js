import Head from '../components/Head/Head'
import Search from '../components/Search/Search'
import Card from '../components/Card/Card'
import Item from '../components/Item/Item'
import logo from '../assets/img/hero.png'
import '../App.css'
// import Hero from '../components/Hero/Hero'
// import bghero from '../assets/hero1.png'

function Home() {

  // const handleDetail = (id) => {
  //   history.push(`/detail/:${id}`)
  // }

  return(
    <>
      <div id='bgHero' className=''>
        <img id='bgHero-img' src={logo} alt="" />
      </div>
      <div className="container">
        <Head />
        {/* <Hero /> */}
        <Search />
        <Card />
        <h1 className='text-center m-4'>Group Tour</h1>
        <div className='d-flex'>
          <Item />
        </div>
      </div>
    </>
  )
}

export default Home