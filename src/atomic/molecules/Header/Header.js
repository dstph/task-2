import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive';

const Header = ({array}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 900px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(min-device-width: 600px)' })
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 599yarpx)'
  })
  const [date, setDate] = useState(new Date)
  const currentDate = date.toLocaleString().slice(1,17)
  return(
    <div className={isDesktopOrLaptop ?  'header-container' : isTabletOrMobile ? 'header-container-tablet' : 'header-container-mobile'}>
      <div className='length'>Quantity : {array.length}</div>
      <div className='date'>Current date : {currentDate}</div>
    </div>
  )

}

export default Header;