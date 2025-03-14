import React from 'react'
import { Dessert, useDesserts } from './DessertContextProvider'
import DessertsForm from './DessertsForm'
import { useState } from 'react'

type DessertItemProps = {
    data: Dessert
}

const DessertItem: React.FC<DessertItemProps> = (props) => {
    const { removeDessert, editDessertData, getEditDessert } = useDesserts()
    
    const { data } = props
    const { id, image, name, price, description } = data

    const [isAddingNewDessert, setIsAddingNewDessert] = useState(false)

    const addNewDessertHandler = () => setIsAddingNewDessert(true)

    const deleteHandler = () => removeDessert(id)

    if (editDessertData && editDessertData.id === id) {
        return (
            <>
                <DessertsForm editDessertData={data} />
                <button onClick={() => getEditDessert(null)}>Cancel Edit</button>
                
            </>
        )
    }

    if (isAddingNewDessert) {
        return (
            <>
                <DessertsForm />
                <button onClick={() => setIsAddingNewDessert(false)}>Cancel Add</button>
            </>
        )
    }
    

    return (
        <> 
            <div className='dessert-card'>
                <h3>{name}</h3>
                <img className='dessert-image' src={image} alt={name} />
                <p>Price: {price} €</p>
                <p>{description}</p>

                <button className='button-style' onClick={deleteHandler}>Delete</button>
                <button className='button-style' onClick={() => getEditDessert(data)}>Edit</button>

                <button className='button-style' onClick={addNewDessertHandler}>Add New Dessert</button>
            </div>
        </>
    )
}

export default DessertItem