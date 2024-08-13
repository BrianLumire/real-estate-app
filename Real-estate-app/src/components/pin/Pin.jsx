import './pin.scss';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupbox">
          <img src={item.img} alt="" />
          <div className="textbox">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className='bed '>{item.bedroom}bedroom</span>
            <b>Ksh {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
