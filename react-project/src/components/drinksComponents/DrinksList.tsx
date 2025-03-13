import React from 'react'
import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { actionTypes, initialState, reducer } from './drinksReducer'
import { API_URL } from '../../../config'

interface Drink {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
}

const DrinksList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { drinks, loading, error } = state

    useEffect(() => {
        console.log(state)

    }, [state])

    useEffect(() => {
        const getData = async () => {
            try {
                dispatch({ type: actionTypes.FETCH })

                const { data } = await axios.get<Drink[]>(`${API_URL}/drinks`)

                dispatch({ type: actionTypes.SUCCESS, payload: data})

            } catch {
                dispatch({ type: actionTypes.FAIL })
                console.error(error)
            }
        }

        getData()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {drinks.length > 0 ? (
                drinks.map((drink) => (
                <div key={drink.id}>
                    <img src={drink.image} alt={drink.name} />
                    <h3>{drink.name}</h3>
                    <p>{drink.description}</p>
                    <p>${drink.price}</p>
                </div>
                ))
            ) : (
                <p>No drinks available</p>
            )}
        </div>
    )
}
export default DrinksList