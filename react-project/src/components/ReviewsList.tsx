import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import styled from 'styled-components'

const Reviews = styled.div`
  font-size: 15px;
  color: #574631;
  display: flex;
  gap: 30px;
`;

const Username = styled.div`
  font-size: 13px;
  color: #574631ac;
`;

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
                    <Reviews className='review-list'>
                        {reviews.map(review => (
                            <div key={review.id}>
                                <div>{review.body}</div>
                                <div>{review.rating}</div>
                                <Username>{review.username}</Username>
                            </div>
                        ))}
                    </Reviews>
                )}
            </div>
        </div>
    )
}
export default ReviewsList