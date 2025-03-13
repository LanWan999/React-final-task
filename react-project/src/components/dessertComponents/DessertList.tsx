import React, { useState } from 'react'
import { useDesserts } from "./DessertContextProvider"
import DessertItem from './DessertItem'

const DessertList: React.FC = () => {
    const { dessertsList } = useDesserts()
    

    return (
        <div>
            <div>
                {dessertsList.map(dessert => <DessertItem key={dessert.id} data={dessert} />)}
            </div>
        </div>
    )
}
export default DessertList