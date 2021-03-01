import React from 'react';

const Img = ({img, id, key, handlerChoosenPicture, handler})=>(
  <div className='card-container' onClick={()=>handlerChoosenPicture(id)}>
    <div className='circle' >
        <img onClick={()=>handlerChoosenPicture(id)} src={img} id={id} key={key}/>
    </div>
    <button id={id} onClick={()=>handler(id)}>X</button>
  </div>
)

export default Img;