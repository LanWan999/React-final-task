import React from 'react'
import MerchList from '../components/MerchList'
import ReviewForm from '../components/ReviewForm'
import ReviewsList from '../components/ReviewsList'
import NavigationBar from '../components/NavigationBar'


const MerchPage = () => {
    return(
        <div>
            <NavigationBar/>
            <h1>Merch</h1>
                <MerchList />
            <div>
                <h3>Reviews</h3>
                <ReviewsList />
            </div>
            <div>
                <h3>Leave a review!</h3>
                <ReviewForm />
            </div>
            
        </div>
    )
}
export default MerchPage