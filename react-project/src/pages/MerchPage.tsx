import React from 'react'
import MerchList from '../components/MerchList'
import CommentForm from '../components/CommentForm'
import CommentsList from '../components/CommentsList'
import { CartPageContextProvider } from '../components/cartComponents/CartContext'
import NavigationBar from '../components/NavigationBar'


const MerchPage = () => {
    return(
        <div>
            <NavigationBar/>
            <h1>Merch</h1>
            <CartPageContextProvider>
                <MerchList />
            </CartPageContextProvider>
            <div>
                <h3>Reviews</h3>
                <CommentsList />
            </div>
            <div>
                <h3>Leave a comment!</h3>
                <CommentForm />
            </div>
            
        </div>
    )
}
export default MerchPage