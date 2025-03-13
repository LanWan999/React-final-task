import React from 'react'
import { useCart } from '../components/cartComponents/CartContext';


const CartPage = () => {

    const { cart, removeProduct, update, clear } = useCart();

    
    if (cart.length === 0) {
        return <h2>Your cart is empty!</h2>;
    }

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
            <h1>Your Cart</h1>
            <div>
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>{item.name}</div>
                        <div>{item.price} €</div>

                        
                        <div>
                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>

                        
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div>
                <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} €</h3>
            </div>
        </div>
    )
}
export default CartPage