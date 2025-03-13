export type CartState = {
    cart: CartProduct[]; 
}

export type Product = {
    id: string; 
    name: string; 
    image: string;
    price: number;
    stock: number;
}


export type CartProduct = Product & {
    quantity: number;
}
export enum ActionTypes {
    ADD_ITEM = 'addItem',
    REMOVE_ITEM = 'removeItem',
    UPDATE_QUANTITY= 'update',
    CLEAR_CART = 'clear',
}

export type Action =
    | { type: ActionTypes.ADD_ITEM, payload: CartProduct }
    | { type: ActionTypes.REMOVE_ITEM, payload: Product['id'] }
    | { type: ActionTypes.UPDATE_QUANTITY, payload: {id: Product['id'], quantity: number} }
    | { type: ActionTypes.CLEAR_CART }

export const cartReducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
        
        case ActionTypes.ADD_ITEM: {
            const newProduct = action.payload
            const { id } = newProduct

            const existingItem = state.cart.find(item => item.id === id)

            if (existingItem) {
                const updatedCart = state.cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)

                console.log("Updated cart with existing item", updatedCart)

                return {
                    ...state,
                    cart: updatedCart
                }
            }else {
                const updatedProduct: CartProduct = { ...newProduct, quantity: 1 }
                const updatedCart = [...state.cart, updatedProduct]
                console.log("Updated cart with new item", updatedCart)
                return {
                    ...state,
                    cart: updatedCart
                };
            }
        }

        case ActionTypes.REMOVE_ITEM: {
            return { 
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }

        case ActionTypes.UPDATE_QUANTITY: {
            const { id, quantity } = action.payload
            
            const updatedCart = state.cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity
                    }
                }else {
                    return item
                }
            })
            
            return {
                ...state,
                cart: updatedCart
            }
        }
        case ActionTypes.CLEAR_CART: {
            return {
                ...state,
                cart: []
            }   
        }
        default:
            return state 

    }
}