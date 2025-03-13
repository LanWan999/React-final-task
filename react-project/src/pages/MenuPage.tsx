import React from 'react'
import NavigationBar from '../components/NavigationBar'
import { DessertsPageContextProvider } from '../components/dessertComponents/DessertContextProvider'
import DessertList from '../components/dessertComponents/DessertList'
import DrinksList from '../components/drinksComponents/DrinksList'


const MenuPage = () => {
    return(
        <div>
            <NavigationBar/>
            <h1>Desserts</h1>
            <DessertsPageContextProvider>
                <DessertList />
            </DessertsPageContextProvider>
            <h1>Drinks</h1>
            <DrinksList />
        </div>
    )
}
export default MenuPage