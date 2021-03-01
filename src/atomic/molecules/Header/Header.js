import React, {useState} from 'react'

const Header = ({array}) => {
  const [date, setDate] = useState(new Date)
  const currentDate = date.toLocaleString().slice(1,17)
  return(
    <div className='header-container'>
      <div className='length'>Quantity : {array.length}</div>
      <div className='date'>Current date : {currentDate}</div>
    </div>
  )

}

export default Header;