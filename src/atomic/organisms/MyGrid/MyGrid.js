import React, { useState, useEffect } from 'react'; 
import { useMediaQuery } from 'react-responsive';
import Img from '../../atoms/Img/Img';
import {images} from '../../../images';
import Header from '../../molecules/Header/Header';
import Modal from '../../molecules/Modal/Modal';


const MyGrid = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 900px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(min-device-width: 600px)' })
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 599yarpx)'
  })
  const [pictures, setPictures] = useState(localStorage.getItem('pictures')
  ? JSON.parse(localStorage.getItem('pictures'))
  : images);
  const [flag, setFlag] = useState(false)
  const [choosenId, setChoosenId] = useState('')
  const [choosenPicture, setChoosenPicture] = useState({})
  const handleDeletePicture = (id)=> {
    setPictures(pictures.filter(el=>el.id!==id));
	}
  
  const handlerChoosenPicture = (id) => {    
    setChoosenId(id)
    setFlag(!flag)
  }
  useEffect(() => {
    localStorage.setItem('pictures', JSON.stringify(pictures))
  }, [pictures])
  useEffect(()=>{
    setChoosenPicture(pictures.find(el=>el.id===choosenId));
    console.log(choosenPicture)
  },[choosenId, flag])
  return(
    <>
      <Header array={pictures} />
      <div className={isDesktopOrLaptop ?  'my-grid' : isTabletOrMobile ? 'my-grid-tablet' : 'my-grid-phone'}>
        {
          pictures.map((data,key)=>
            <Img img={data.logo} id={data.id} key={key} handlerChoosenPicture={handlerChoosenPicture} handler={handleDeletePicture} />
          )
        }
      </div>
      {
        flag && choosenPicture && <Modal choosenPicture={choosenPicture} handlerChoosenPicture={handlerChoosenPicture} />
      }
      <button className={isDesktopOrLaptop ?  'btn' : isTabletOrMobile ? 'btn-tablet' : 'btn-phone'} onClick={()=>setPictures(images)}>restore</button>
    </>  
  )
  }

export default MyGrid;