import React from 'react';
import './list.scss';
import Posters from '../posters/Posters'; 
import { propertiesdata } from '../../Libraries/testdata';

function List() {
  return (
    <div className="list">
      {propertiesdata.map(item => (
        <Posters key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;