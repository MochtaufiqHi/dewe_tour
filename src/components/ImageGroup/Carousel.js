import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/img/hero1.png'
import { useQuery } from 'react-query' 
import { API } from '../../config/api'
import { useParams } from 'react-router-dom'

function CorouselImg() {
  let { id } = useParams()
  let { data: trip } = useQuery('tripCache', async () => {
    const response = await API.get('/trip/' + id);
    return response.data.data;
  });

  var IMG = "http://localhost:5000/uploads/" + trip?.image

  return (
    <>
    <div className='container'>
      <h1 className='mt-5'>{trip?.title}</h1>
      <h5 className='mt-5'>{trip?.country.name}</h5>
      <Carousel className='mt-5'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={IMG}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className="container">
        <div className="row">
          <div className="col-sm">
            <image src={IMG} alt="image"/>
          </div>
          <div className="col-sm">
            <image src={IMG} alt="image"/>
          </div>
          <div className="col-sm">
            <image src={IMG} alt="image"/>
          </div>
        </div>
      </div> */}
    </div>
    </>
  );
}

export default CorouselImg