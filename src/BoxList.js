import React, {useState} from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, newBox])
  }

const remove = (id) => {
  setBoxes(boxes => boxes.filter(box => box.id !== id));
}

  return (
    <div className='BoxList'>
      <h2>Color Box Maker</h2>
      <NewBoxForm addBox={addBox} />
      <div className='BoxList-boxes'>
        {boxes.map(({id, width, height, color}) => <Box id={id} width={width} height={height} color={color} key={id} remove={remove}/>)}
      </div>
    </div>
  )
}


export default BoxList;