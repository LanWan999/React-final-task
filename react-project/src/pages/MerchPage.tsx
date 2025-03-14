import React from 'react'
import MerchList from '../components/MerchList'
import ReviewForm from '../components/ReviewForm'
import ReviewsList from '../components/ReviewsList'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  color: #574631;
`;

const MerchPage = () => {
    return(
        <div>
            <NavigationBar/>
            <Title>Merch</Title>
                <MerchList />
            <div>
                <SectionTitle>Reviews</SectionTitle>
                <ReviewsList />
            </div>
            <div>
                <SectionTitle>Leave a review!</SectionTitle>
                <ReviewForm />
            </div>
            <Footer />
        </div>
    )
}
export default MerchPage