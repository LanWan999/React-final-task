import React from 'react'
import {  useReducer } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import styled from 'styled-components'

const FormSection = styled.div`
  margin-bottom: 10px;
  color: #574631;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
    background-color: rgb(228, 194, 120);
    padding: 10px 10px;
    border-radius: 6px;
    font-size: 15px;
`;

const initialState = {
    username: '',
    body: '',
    rating: ''
}

type State = typeof initialState

type Action = 
    | {type: 'SET_USERNAME', payload: string}
    | {type: 'SET_BODY', payload: string}
    | {type: 'SET_RATING', payload: string}

const reviewFormReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {...state, username: action.payload}
        case 'SET_BODY':
            return {...state, body: action.payload}
        case 'SET_RATING':
            return {...state, rating: action.payload}
        default:
            return state
    }
}

const ReviewForm = () => {
    const [state, dispatch ] = useReducer(reviewFormReducer, initialState)

    const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_USERNAME', payload: event.target.value})
    }

    const bodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({ type: 'SET_BODY', payload: event.target.value})
    }

    const ratingHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SET_RATING', payload: event.target.value})
    }

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newReview = {
            username: state.username,
            body: state.body,
            rating: state.rating
        }

        const response = await axios.post(`${API_URL}/reviews`, newReview)
    }

    return(
        <div>
            <div></div>
            <form onSubmit={submitHandler}>
                <FormSection className="form-control">
                    <label htmlFor="title">Username</label>
                    <input type="text" value={state.username} onChange={usernameHandler}/>
                </FormSection>
                <FormSection className="form-control">
                    <label htmlFor="body">Body</label>
                    <textarea name="body" value={state.body} onChange={bodyHandler}></textarea>
                </FormSection>
                <FormSection className="form-control">
                    <label htmlFor="user">Rating</label>
                    <input type="text" value={state.rating} onChange={ratingHandler}/>
                </FormSection>
                <Button type="submit">Submit</Button>
            
            </form>
        </div>
    )
    
}
export default ReviewForm