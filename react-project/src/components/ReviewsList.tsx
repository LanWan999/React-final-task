import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'

type Review = {
    id: string
    username: string
    body: string
    rating: string
}

const ReviewsList = () => {
    const [ reviews, setReviews ] = useState<Review[] | null>(null)

    useEffect(() => {
        const fetchReviews = async () => {

            const { data } = await axios(`${API_URL}/reviews`)
            setReviews(data)
        }

        fetchReviews()
    }, [])

    if (!reviews) {
        return 'Loading...'
    }

    if (reviews.length === 0) {
        return <div>No reviews found</div>
    }

    return(
        <div>
            <div>
                {reviews.length > 0 && (
                    <div className='review-list'>
                        {reviews.map(review => (
                            <div key={review.id}>
                                <div>{review.body}</div>
                                <div>{review.rating}</div>
                                <div>{review.username}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default ReviewsList