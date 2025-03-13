import { createContext, ReactNode, useContext, useReducer } from "react"
import { Action, CartProduct, cartReducer } from "./CartReducer"
import { ActionTypes } from "./CartReducer"
import React from "react"
import { Product } from "./CartReducer"

const cartInitialState: CartState = {
    cart: [],  
}

interface CartState {
    cart: CartProduct[];
}

interface CartPageContextType extends CartState {
    cart: CartProduct[]
    addProduct: (product: Product) => void
    removeProduct: (id : Product['id']) => void
    update: (id : Product['id'], quantity: number) => void
    clear: () => void
}


export const CartPageContext = createContext<CartPageContextType | undefined>(undefined)

type CartPageContextProviderProps = {
    children: ReactNode
}

export const CartPageContextProvider: React.FC<CartPageContextProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer,  cartInitialState)
    const { cart } = state

    const addProduct = (product: Product) => {
        const cartProduct: CartProduct = { ...product, quantity: 1}
        dispatch({type: ActionTypes.ADD_ITEM, payload: cartProduct})
    }
    
    const removeProduct= (id: Product['id']) => {
        dispatch({ type: ActionTypes.REMOVE_ITEM, payload: id })
    }

    const clear = () => dispatch({ type: ActionTypes.CLEAR_CART })


    const update = (id : Product['id'], quantity: number) =>  dispatch({ type: ActionTypes.UPDATE_QUANTITY, payload: { id, quantity}  })
    

    const ctxValue: CartPageContextType = {
        cart: cart,
        addProduct,
        removeProduct,
        update,
        clear,
    }

    return (
        <CartPageContext.Provider value={ctxValue}>
            {children}
        </CartPageContext.Provider>
    )
}

export const useCart = () => {
    const ctx = useContext(CartPageContext)

    if (!ctx) {
        throw new Error('useCart cannot be used outside the CartPageContextProvider')
    }

    return ctx
} 