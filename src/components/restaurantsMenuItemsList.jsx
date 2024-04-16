import React from 'react'
import noimage from "../img/notavailable.jpg"
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

let cardImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_588,h_320/";

const RestaurantsMenuItemsList = (props) => {
    console.log(props);
    let arr = props.data;
    // console.log(arr);

    let dispatch=useDispatch();
    let handleAddToCart=(x)=>{
        dispatch(addItem(x))
    }
    return (
        <div>
            {
                arr.map((x) =>
                    <div className='menuItemList'>
                        <div>
                            <p className='item-name'>{x.card.info.name}</p>
                            <p className='item-price'>₹ {(x.card.info.price) ? x.card.info.price / 100 : x.card.info.defaultPrice / 100}</p>
                            <p className='item-description'>{x.card.info.description}</p>
                        </div>
                        <div className='item-cart'>
                            {
                                (x.card.info.imageId) ? <img className='item-image' src={cardImage + x.card.info.imageId} alt='restaurantsItemImage' /> : <img className='item-image' src={noimage} alt='restaurantsItemImage'/>
                            }
                            <button className='addToCart-button' onClick={()=>handleAddToCart(x)}>ADD +</button>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default RestaurantsMenuItemsList;