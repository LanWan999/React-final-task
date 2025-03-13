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
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{price}</p>
            <p>{description}</p>

            <button onClick={deleteHandler}>Delete</button>
            <button onClick={() => getEditDessert(data)}>Edit</button>

            <button onClick={addNewDessertHandler}>Add New Dessert</button>
        </>
    )
}

export default DessertItem