import React from 'react'
import { NavLink } from 'react-router'
import '../CSS/navigationBar.css'

const NavigationBar = () => {
    return(
        <div className='navigation-wrapper'>
            <nav className="project-navigation">
                <div className='logo-links-wrapper'>
                    <div className='logo-wrapper'>
                        <NavLink to="/project/home" end>
                            <img className='capybara-logo' src="https://cdn.pixabay.com/photo/2022/05/03/23/12/animal-7172825_1280.png" alt="" />
                        </NavLink>
                        <div className='cafe-name'>Desserts & Capybaras</div>
                    </div>
                    <div className="nav-list">
                        <div className="nav-item-home">
                            <NavLink className='nav-link' to="/project/home" end>Home</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className='nav-link' to="/project/menu" end>Menu</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className='nav-link' to="/project/merch" end>Merch</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className='nav-link' to="/project/capybaras" end>Capibara Gallery</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className='nav-link' to="/project/comments" end>Comments</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink className='nav-link' to="/project/cart" end><img className='cart-logo' src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="cart logo" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavigationBar