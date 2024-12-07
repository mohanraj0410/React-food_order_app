import Cards, { CardOffer } from "./cards.jsx"
import { useEffect, useState } from "react"
import { Shimmer } from "./Shimmer.jsx";
import banner from "../img/dweb_header.avif"
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export let Body = () => {
    let [resInfo, setResInfo] = useState([]);
    let [searchList, setSearchList] = useState([]);
    useEffect(() => getData(), []);
    function fetchData() {
        return fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    }
    function getData() {
        fetchData().then(
            (data) => {
                return data.json();
            }
        )
            .then(
                (x) => {
                    // console.log(x)
                    setResInfo(x.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                    setSearchList(x.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                }
            )
            .catch(error => {
                // console.error(error);
                alert("Notes : using a CORS extension to access data from the Swiggy API in your application during development.");
              })
            
    }
    if (resInfo.length == 0) {
        return (<Shimmer />)
    }
    let checkRating = () => {
        let ratingValue = resInfo.filter((x) => {
            return (
                x.info.avgRating >= 4.4
            )
        })
        setSearchList(ratingValue)
    }
    let valueCheck = () => {
        let input = document.getElementById("input").value;
        let inputVal = input.toLowerCase()
        let nameValue = resInfo.filter((x) => {
            return (
                x.info.name.toLowerCase().includes(inputVal)
            )
        })
        setSearchList(nameValue);
    }
    
    
    return (
        <div className="body">
            <div className="banner">
                <h2 className="banner-head">Restaurants <br /> Near Me</h2>
                <img className="banner-image" src={banner} alt="banner" />
            </div>
            <div className="search-rating">
                <div className="rating-search">
                    <button className="rating-button" onClick={checkRating}>Top Rating</button>
                </div>
                <div className="search">
                    <input type="text" id="input" className="search-input" placeholder="search" onChange={valueCheck} />
                    <FaSearch className="search-icon" />
                </div>
            </div>
            <div>
                <h2 className="heading">Top restaurant chains in <span className="area">Coimbatore</span></h2>
            </div>
            <div className="card">
                {
                    searchList.map((x) => {
                        // console.log(x)
                        return (
                            <Link to={"/restaurants/" + x.info.id}>
                                {
                                    (x.info.aggregatedDiscountInfoV3 != undefined) ?
                                        (x.info.aggregatedDiscountInfoV3.header != undefined) ?
                                            <CardOffer key={x.info.id} resInfo={x.info} /> :
                                            <Cards key={x.info.id} resInfo={x.info} /> :
                                        <Cards key={x.info.id} resInfo={x.info} />
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}


