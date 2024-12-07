import { useState } from "react";
import img from "../img/logo.png";
import { Link } from "react-router-dom";
import { FaHome, FaBookReader, FaPhoneAlt, FaCartArrowDown, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

export let Header = () => {
    let [user, setUser] = useState("in");

    let userAction = () => {
        setUser((user == "in") ? "out" : "in");
    }

    let cartItems=useSelector((data)=>data.cart.item.length)
    
    return (
        <nav className="header">
            <div>
                <Link to="/" className="logo-brand">
                    <img className="logo" src={img} alt="logo" />
                    <h1 className="brand">Yummy</h1>
                </Link>
            </div>
            <ul className="links">
                <li><Link to="/"><FaHome className="icons"/>Home</Link></li>
                <li><Link to="/about"><FaBookReader className="icons"/>About</Link></li>
                <li><Link to="/contact"><FaPhoneAlt className="icons"/>Contact</Link></li>
                <li><Link to="" onClick={userAction}><FaUser className="icons"/>Log {user}</Link></li>
                <li><Link to="/cart"><FaCartArrowDown className="icons"/>Cart <span className="cartCount">{cartItems}</span></Link></li>
            </ul>
        </nav>
    )
}