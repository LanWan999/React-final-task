import React from 'react'
import { NavLink } from 'react-router'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  margin-top: 50px;
`;

const Footer = () => {
    return(
        <FooterStyle>
            <div>
                <div>
                    <div><NavLink className='nav-link' to="/project/home" end>About Us</NavLink></div>
                    <div><NavLink className='nav-link' to="/project/capybaras" end>Gallery</NavLink></div>
                    <div><NavLink className='nav-link' to="/project/home" end>Contacts</NavLink></div>
                </div>
            </div>
            <div>
                <div>
                    <p className="copyright">© Copyright 2024 Desserts & Capybaras. All rights reserved.</p>
                </div>
            </div>

        </FooterStyle>
    )
}
export default Footer