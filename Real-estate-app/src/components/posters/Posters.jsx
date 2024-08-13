import React from 'react';
import { Link } from 'react-router-dom';
import './posters.scss';

function Posters({ item }) {
  return (
    <div className='posters'>
      <Link to={`/list/${item.id}`} className='imagecontainer'>
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="textcontainer">
        <h2 className="title">
          <Link to={`/${item.id}`}> {item.title} </Link>
        </h2>
        <p className='address'>
          <img src="/pin.png" alt="Pin" />
          <span>{item.address}</span>
        </p>
        <p className='price'>Ksh {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="Bed" />
              <span>{item.bedrooms} bedrooms</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="Bath" />
              <span>{item.bathrooms} bathrooms</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="Save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="Chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posters;
