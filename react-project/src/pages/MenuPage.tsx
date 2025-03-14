import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { DessertsPageContextProvider } from '../components/dessertComponents/DessertContextProvider'
import DessertList from '../components/dessertComponents/DessertList'
import DrinksList from '../components/drinksComponents/DrinksList'
import Footer from '../components/Footer'
import '../CSS/menuPage.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

const MenuPage = () => {
    return(
        <div>
            <NavigationBar/>
            <div className='food-wrapper'>
                <Title>Desserts</Title>
                <DessertsPageContextProvider>
                    <DessertList />
                </DessertsPageContextProvider>
                <Title>Drinks</Title>
                <DrinksList />
            </div>
            <Footer />
        </div>
    )
}
export default MenuPage