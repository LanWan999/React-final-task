import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from "../../config"
import { useCart } from './cartComponents/CartContext'

type Plushy = {
    plushyId: string
    name: string
    image: string
    price: number
    stock: number
    
}

type Sticker = {
    stickerId: string
    name: string
    image: string
    price: number
    stock: number
    
}

const MerchList = () => {

    const [ plushies, setPlushies ] = useState<Plushy[] | null>(null)
    const [ stickers, setStickers ] = useState<Sticker[] | null>(null)
    const [loadingPlushies, setLoadingplushies] = useState<boolean>(true)
    const [loadingStickers, setLoadingStickers] = useState<boolean>(true)

    const { addProduct } = useCart()

    useEffect(() => {
        const fetchPlushies = async () => {
            try {
                const { data } = await axios(`${API_URL}/plushies`)
                setPlushies(data) 
            } catch (error) {
                console.error("Error fetching plushies", error)
            } finally {
                setLoadingplushies(false)
            }
        }

        fetchPlushies()
    }, [])

    useEffect(() => {
        const fetchStickers = async () => {
            try {
                const { data } = await axios(`${API_URL}/stickers`)
                setStickers(data) 
            } catch (error) {
                console.error("Error fetching stickers", error)
            } finally {
                setLoadingStickers(false)
            }
        }

        fetchStickers()
    }, [])

    if (loadingPlushies || loadingStickers) {
        return 'Loading...'
    }

    if (!plushies || plushies.length === 0) {
        return <div>No plushies found</div>
    }

    if (!stickers || stickers.length === 0) {
        return <div>No stickers found</div>
    }

    const addToCartHandler = (product: Plushy | Sticker) => {
        const cartProduct = {
            ...product,
            id: 'plushyId' in product ? product.plushyId : product.stickerId,
            quantity: 1,
        }
        addProduct(cartProduct)
    }

    return(
        <div>
            <h1>Plushies</h1>
            <div>
                {plushies.length > 0 && (
                    <div className='photo-card'>
                        {plushies.map(plushy=> (
                            <div key={plushy.name}>
                                <img src={plushy.image} alt={plushy.name} />
                                <div>{plushy.name}</div>
                                <div>{plushy.price} €</div>
                                <div>In stock {plushy.stock}</div>
                                <button onClick={() => addToCartHandler(plushy)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <h1>Stickers</h1>
            <div>
                {stickers.length > 0 && (
                    <ul className='photo-card'>
                        {stickers.map(sticker=> (
                            <li key={sticker.name}>
                                <img src={sticker.image} alt={sticker.name} />
                                <div>{sticker.name}</div>
                                <div>{sticker.price} €</div>
                                <div>In stock {sticker.stock}</div>
                                <button onClick={() => addToCartHandler(sticker)}>Add to Cart</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
export default MerchList