import './listpage.scss';
import { propertiesdata } from '../../Libraries/testdata';
import Filter from '../../components/filter/Filter';
import Posters from '../../components/posters/Posters';
import Map from '../../components/map/Map';

function Listpage() {
  const data = propertiesdata;

  return (
    <div className='listpage'>
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />
          {data.map(item => (
            <Posters key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default Listpage;
