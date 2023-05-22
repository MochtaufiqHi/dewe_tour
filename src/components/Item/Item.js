import { Link } from 'react-router-dom'

import { trip } from '../../data'

import './index.css'

function Item() {
  return(
    <>
      <div className='d-flex justify-content-center' style={{flexWrap:"wrap", flexShrink:"inherit"}}>
        {trip.map((data, index) => (
          <div className="card position-relative m-3" key={index}>
            <p className="position-absolute pages end-0">{data?.quota}/20</p>
            <img src={data?.img[0]} alt="Destination" style={{width:"320px", margin:"8px auto"}}></img>
            <div className="card-body mx-2">
              {/* <a href={`/detail/${index}`} style={{textDecorationLine:"none", color:"black"}}> */}
              <Link to={`/detail/${index}`} style={{textDecorationLine:"none", color:"black"}}>
                <h5 className="card-title my-3">{data.tittle}</h5>
                {/* <h5 className="card-title my-3" onClick={() => props.goDetail(data.id)}>{data.tittle}</h5> */}
              </Link>
              {/* </a> */}
              <div className="d-flex justify-content-between w-100">
                <p className="price">IDR. {data.price.toLocaleString()}</p>
                <p className="country">{data.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     </>
  )
}

export default Item
