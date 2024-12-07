import image from '../img/playstore.png'
import pic from '../img/applestore1.jpg'

export let Footer = () => {
    return (
        <div className='main-footer'>
            <div className='app-footer'>
                <div>
                    <h2 className='app-head'>For better experience,download<br></br> the <span className='brand-name'>Yummy</span> app now</h2>
                </div>
                <div className='app-img'>
                    <img className='app-image' src={image} alt="playstore" />
                    <img className="app-image" src={pic} alt="appstore" />
                </div>
            </div>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h2>About Us</h2>
                            <p>Welcome to Yummy, your go-to place for delicious food delivered right to your doorstep. We are passionate about bringing you the best culinary experiences.</p>
                        </div>
                        <div className="footer-section contact">
                            <h2>Contact Us</h2>
                            <p>Email: info@yummy.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </div>
                        <div className="footer-section social">
                            <h2>Follow Us</h2>
                            <a href="#">Facebook/Yummy</a>
                            <a href="#">Twitter/Yummy</a>
                            <a href="#">Instagram/@Yummy</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Yummy - Food Order Website</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}