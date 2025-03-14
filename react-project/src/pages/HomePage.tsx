import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../CSS/homePage.css'
import Footer from '../components/Footer'



const HomePage = () => {

    return(
        <div className='homePage-wrapper'>
            <NavigationBar/>
            <h1>About Us</h1>
            <p className='aboutUs-paragraph'>Welcome to Desserts & Capybaras, the perfect blend of sweet treats and serene vibes! Nestled in a cozy corner, our café offers a delightful selection of decadent desserts, from rich cakes to creamy pastries, all paired with aromatic coffees and teas. What makes us truly unique?  </p>
            <div className='homepage-aboutUs-images'>
                <div className='image-info-wrapper'>
                    <div>
                        <img className='cafe-image' src="https://www.shutterstock.com/image-photo/cafe-terrace-small-european-city-600nw-201260489.jpg" alt="cafe image" />
                    </div>
                    <div>
                        <div>Small yet welcoming space</div>
                        <p>The indoor seating area, tucked away behind cozy, enclosed walls, offers a perfect hideaway for those seeking some much-needed me-time.</p>
                    </div>
                </div>
                <div className='image-info-wrapper'>
                    <div>
                        <img className='capybaras-bench' src="https://www.shout.sg/wp-content/uploads/2024/06/358415375_654864486670064_7585761107916520626_n.jpeg" alt="capybaras on bench" />
                    </div>
                    <div>
                        <div>Our Star Employees </div>
                        <p>Our friendly, adorable capybaras roam freely around the café, adding a touch of joy to your visit. You might find them lounging lazily in the sun, or curiously sniffing around the garden, inviting gentle pats and smiles from anyone who crosses their path. </p>
                    </div>
                </div>
                <div className='image-info-wrapper'>
                    <div>
                        <img className='coffee-cup' src="https://media.istockphoto.com/id/1385077826/photo/hot-latte-the-best-start-to-any-morning.jpg?s=612x612&w=0&k=20&c=5Wp-vjD57PqAz8GCJTUeEeqFbFJRw1tUx-dHC6vPMm4=" alt="coffee cup " />
                    </div>
                    <div>
                        <div>Serene Atmosphere</div>
                        <p>The café’s outdoor yard is a peaceful escape, with cozy seating surrounded by lush greenery. The gentle hum of nature blends with the soft clinking of coffee cups, making it the perfect spot to relax.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HomePage