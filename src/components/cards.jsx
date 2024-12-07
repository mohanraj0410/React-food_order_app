import {FaStar} from "react-icons/fa";

let cardImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_588,h_320/";

let Cards = (x) => {
    return (
        <div className="cards">
            <img src={cardImage + x.resInfo.cloudinaryImageId} className="image" />
            <h3 className="food-name">{x.resInfo.name}</h3>
            <p className="location">{x.resInfo.areaName}</p>
            <div className="rating-price">
                <h4 className="rating"><FaStar className="rating-icon"/>{x.resInfo.avgRating}</h4>
                <h5 className="price">{x.resInfo.costForTwo}</h5>
            </div>
        </div>
    )
}
let ResCardOffer = (Card) =>{
    return((props)=>{
        return(
            <div className="mainOffer">
                <h4 className="resOffer">{props.resInfo.aggregatedDiscountInfoV3.header} {props.resInfo.aggregatedDiscountInfoV3.subHeader}</h4>
                <Card resInfo={props.resInfo}/>
            </div>
        )
    })
}
export let CardOffer = ResCardOffer(Cards)


export default Cards;