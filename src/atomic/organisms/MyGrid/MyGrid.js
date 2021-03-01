import React, { useState, useEffect } from 'react'; 
import Img from '../../atoms/Img/Img';
import {images} from '../../../images';
import Header from '../../molecules/Header/Header';
import Modal from '../../molecules/Modal/Modal'


const MyGrid = () => {
  const [pictures, setPictures] = useState(images);
  const [flag, setFlag] = useState(false)
  const [choosenId, setChoosenId] = useState('')
  const [choosenPicture, setChoosenPicture] = useState({id:'rap'})
  const handleDeletePicture = (id)=> {
    setPictures(pictures.filter(el=>el.id!==id));
	}
  
  const handlerChoosenPicture = (id) => {    
    setChoosenId(id)
    setFlag(!flag)
   
  }
  useEffect(()=>{
    setChoosenPicture(pictures.find(el=>el.id==choosenId));
    console.log(choosenPicture)
  },[choosenId, flag])
  return(
    <>
     
      <Header array={pictures} />
      <div className='my-grid'>
        {
          pictures.map((data,key)=>
            <Img img={data.logo} id={data.id} key={key} handlerChoosenPicture={handlerChoosenPicture} handler={handleDeletePicture} />
          )
        }
      </div>
      {
        flag && choosenPicture && <Modal choosenPicture={choosenPicture} handlerChoosenPicture={handlerChoosenPicture} />
      }
    </>  
  )
  }

export default MyGrid;