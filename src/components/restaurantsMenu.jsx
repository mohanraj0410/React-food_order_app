import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaMotorcycle } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import RestaurantsMenuItems from './restaurantsMenuItems';

export const RestaurantsMenu = () => {
    let [resMenu, setResMenu] = useState([])
    let [menuItems, setMenuItems] = useState([])
    let a = useParams()
    let { resId } = a;
    useEffect(() => getMenu(), [])
    function fetchData() {
        return fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=" + resId);
    }
    function getMenu() {
        fetchData().then(
            (data) => {
                return  data.json();
            }
        )
            .then(
                (x) => {
                    console.log(x)
                    setResMenu(x.data.cards)
                    setMenuItems(x.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
                }
            )
    }
    if (resMenu.length == 0) {
        return (
            <div></div>
        )
    }

    let category = menuItems.filter(
        (x) => x.card.card.itemCards != undefined
    )

    let { name, cuisines, areaName, feeDetails, avgRatingString, totalRatingsString, sla, costForTwoMessage } = resMenu[2].card.card.info;
    return (
        <div className='container-resMenu'>
            <div className='container-mainresMenu'>
                <div>
                    <h1 className='res-heading'>{name}</h1>
                </div>
                <div >
                    <div className='resMenuDetails'>
                        <div className='main-resMenu'>
                            <h3 className='resName'>{name}</h3>
                            <p>{cuisines.join(", ")}</p>
                            <p>{areaName}</p>
                            <p><FaMotorcycle className='far-icon' />{feeDetails.message}</p>
                        </div>
                        <div className='resMenu-rating'>
                            <h4 className='resRating'><FaStar className='rating-icon' />{avgRatingString}</h4>
                            <h4 className='resReview'>{totalRatingsString}</h4>
                        </div>
                    </div>
                    <hr />
                    <div className='resMenu-far'>
                        <h3><IoIosTime className='time-icon' />{sla.minDeliveryTime}-{sla.maxDeliveryTime} MINS</h3>
                        <h4><HiOutlineCurrencyRupee className='rupee-icon' />{costForTwoMessage}</h4>
                    </div>
                </div>

                <div>
                    <h3 className='menuItems'>MENU ITEMS</h3>
                    <div>
                        {

                            category.map((x,y) => {
                                return (
                                    <RestaurantsMenuItems data={x.card.card} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

// let mapItems = (menuItems[2].card.card.itemCards == undefined) ?
// menuItems[1].card.card.itemCards : menuItems[2].card.card.itemCards;