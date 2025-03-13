import React from 'react'
import { NavLink } from 'react-router'

const NavigationBar = () => {
    return(
        <div className='navigation-wrapper'>
            <nav className="project-navigation">
                <div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/project/home" end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/project/menu" end>Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/project/merch" end>Merch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/project/gallery" end>Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to="/project/contacts" end>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavigationBar