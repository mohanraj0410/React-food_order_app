import React from 'react'
import { useState } from 'react';
import RestaurantsMenuItemsList from './restaurantsMenuItemsList';
import { FaArrowDown } from "react-icons/fa";

const RestaurantsMenuItems = (props) => {
  let [showItem,setShowItem]=useState(false);
  let handleClick=()=>{
    setShowItem(!showItem);
  }
  return (
    <div>
        <div className='menuTitle' onClick={handleClick}>
            <h3 className='menuItemTitle'>{props.data.title} ({props.data.itemCards.length})</h3>
            <FaArrowDown className='downArrow'/>
        </div>
        {showItem && <RestaurantsMenuItemsList data={props.data.itemCards}/>}
    </div>
  )
}

export default RestaurantsMenuItems;