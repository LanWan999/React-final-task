import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from "../../config"
import { useCart } from './cartComponents/CartContext'
import styled from 'styled-components'

const Button = styled.button`
  color: #6d4d10;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #c78e5f;
  border-radius: 3px;
`;


const Title = styled.h1`
  font-size: 30px;
  color: #574631;
`;

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

    const isPlushy = (product: Plushy | Sticker): product is Plushy => {
        return (product as Plushy).plushyId !== undefined;
    };

    const addToCartHandler = (product: Plushy | Sticker) => {
        const cartProduct = {
            ...product,
            id: isPlushy(product) ? product.plushyId : product.stickerId,
            quantity: 1,
        }
        addProduct(cartProduct)
    }

    const handleAddToCart = (product: Plushy | Sticker) => {
        console.log("Adding product to cart:", product); 
        addToCartHandler(product);  
    };

    return(
        <div>
            <Title>Plushies</Title>
            <div>
                {plushies.length > 0 && (
                    <div className='photo-card'>
                        {plushies.map(plushy=> (
                            <div key={plushy.name}>
                                <img src={plushy.image} alt={plushy.name} />
                                <div>{plushy.name}</div>
                                <div>{plushy.price} €</div>
                                <div>In stock {plushy.stock}</div>
                                <Button onClick={() => handleAddToCart(plushy)}>Add to Cart</Button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Title>Stickers</Title>
            <div>
                {stickers.length > 0 && (
                    <ul className='photo-card'>
                        {stickers.map(sticker=> (
                            <li key={sticker.name}>
                                <img src={sticker.image} alt={sticker.name} />
                                <div>{sticker.name}</div>
                                <div>{sticker.price} €</div>
                                <div>In stock {sticker.stock}</div>
                                <Button onClick={() => handleAddToCart(sticker)}>Add to Cart</Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
export default MerchList