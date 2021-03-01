import React from 'react';
import {images} from '../../../images';

const Modal = ({choosenPicture, handlerChoosenPicture})=>(
  <div className='modal-container'>
    <img src={choosenPicture.logo} />
    <button onClick={()=>handlerChoosenPicture()}>X</button>
  </div>
)

export default Modal;