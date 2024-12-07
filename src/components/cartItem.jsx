import React from 'react'
import noimage from "../img/notavailable.jpg"

let cardImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_588,h_320/";

const CartItem = (data) => {
    let arr = data.data;
    // console.log(arr)

    let price=arr.map((x)=>
    (x.card.info.price) ? x.card.info.price / 100 : x.card.info.defaultPrice / 100
    )
    // console.log(price)
    const getTotalPrice = () => {
        return price.reduce((total, item) => total=total+item,0);
      };

    return (<div>
        {
            arr.map((x) => {
                return (
                    <div className="acontainer">
                        <div className='cartItem-container'>
                            <div>
                                <p className='cartItem-name'>{x.card.info.name}</p>
                                <p className='cartItem-price'>₹ {(x.card.info.price) ? x.card.info.price / 100 : x.card.info.defaultPrice / 100}</p>

                            </div>
                            <div className='cartItem-image'>
                                {
                                    (x.card.info.imageId) ? <img className='cartImage' src={cardImage + x.card.info.imageId} /> : <img className='cartImage' src={noimage} />
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <h3 className='cartTotalPrice'>Total Price : <span className='totalPrice'>₹ {getTotalPrice()}</span></h3>
    </div>
    )
}

export default CartItem;


