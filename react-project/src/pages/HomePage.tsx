import React from 'react'
import NavigationBar from '../components/NavigationBar'
import '../CSS/homePage.css'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

const ParagraphTitle = styled.div`
  font-size: 20px;
  color: #574631;
`;

const Image = styled.img`
  width: 30px;
  padding-right: 10px;
`;

const HomePage = () => {

    return(
        <div className='homePage-wrapper'>
            <NavigationBar/>
            <Title>About Us</Title>
            <p className='aboutUs-paragraph'>Welcome to Desserts & Capybaras, the perfect blend of sweet treats and serene vibes! Nestled in a cozy corner, our café offers a delightful selection of decadent desserts, from rich cakes to creamy pastries, all paired with aromatic coffees and teas. What makes us truly unique?  </p>
            <div className='homepage-aboutUs-images'>
                <div className='image-info-wrapper'>
                    <div>
                        <img className='cafe-image' src="https://www.shutterstock.com/image-photo/cafe-terrace-small-european-city-600nw-201260489.jpg" alt="cafe image" />
                    </div>
                    <div className='info-wrapper'>
                        <ParagraphTitle>Small yet welcoming space</ParagraphTitle>
                        <p>The indoor seating area, tucked away behind cozy, enclosed walls, offers a perfect hideaway for those seeking some much-needed me-time.</p>
                    </div>
                </div>
                <div className='image-info-wrapper'>
                    <div>
                        <img className='capybaras-bench' src="https://www.shout.sg/wp-content/uploads/2024/06/358415375_654864486670064_7585761107916520626_n.jpeg" alt="capybaras on bench" />
                    </div>
                    <div>
                        <ParagraphTitle>Our Star Employees </ParagraphTitle>
                        <p>Our friendly, adorable capybaras roam freely around the café, adding a touch of joy to your visit. You might find them lounging lazily in the sun, or curiously sniffing around the garden, inviting gentle pats and smiles from anyone who crosses their path. </p>
                    </div>
                </div>
                <div className='image-info-wrapper'>
                    <div>
                        <img className='coffee-cup' src="https://media.istockphoto.com/id/1385077826/photo/hot-latte-the-best-start-to-any-morning.jpg?s=612x612&w=0&k=20&c=5Wp-vjD57PqAz8GCJTUeEeqFbFJRw1tUx-dHC6vPMm4=" alt="coffee cup " />
                    </div>
                    <div>
                        <ParagraphTitle>Serene Atmosphere</ParagraphTitle>
                        <p>The café’s outdoor yard is a peaceful escape, with cozy seating surrounded by lush greenery. The gentle hum of nature blends with the soft clinking of coffee cups, making it the perfect spot to relax.</p>
                    </div>
                </div>
            </div>
            <Title>Contacts</Title>
            <p>Email: capybaraCafe@gmail.com</p>
            <p>Phone: +452654235</p>
            <div>
                <a href=""><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="instagram logo" /></a>
                <a href=""><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMtTs8q1WuRfxeiu4qKn0qB4dBckQpbarug&s" alt="instagram logo" /></a>
                <a href=""><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WC2kmKHUuCLw3xRZaZ1mS3otGWQcqM553w&s" alt="instagram logo" /></a>
            </div>

            <Footer />
        </div>
    )
}
export default HomePage