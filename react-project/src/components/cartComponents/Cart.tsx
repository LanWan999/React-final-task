import React from 'react'
import { useCart } from './CartContext';
import NavigationBar from '../NavigationBar';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

const Quantity = styled.span`
  font-size: 20px;
  padding: 20px;
  color: #574631;
`;

const Button = styled.button`
    margin-top: 50px;
    background-color: rgb(228, 194, 120);
    padding: 10px 10px;
    border-radius: 6px;
    font-size: 15px;
`;

const Cart = () => {

    const { cart, removeProduct, update, clear } = useCart();

    const handleRemoveItem = (id: string) => {
        removeProduct(id); 
    }

    const handleUpdateQuantity = (id: string, quantity: number) => {
        if (quantity > 0) {
            update(id, quantity);
        }
    }

    const handleClearCart = () => {
        clear(); 
    }

    return(
        <div>
            <NavigationBar />
            <Title>Your Cart</Title>
            <div>
                {cart.map(item => (
                    <div key={item.id} className="photo-card">
                        
                        <div>
                            <img src={item.image} alt={item.name} />
                            <div>{item.name}</div>
                            <div>{item.price} €</div>
                            <div>
                                <Button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                                <Quantity>{item.quantity}</Quantity>
                                <Button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                                <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Button onClick={handleClearCart}>Clear Cart</Button>
            </div>
            <div>
                <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} €</h3>
            </div>
        </div>
    )
}
export default Cart