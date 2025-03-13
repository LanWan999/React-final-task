import React from 'react'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import axios from "axios"
import { useNavigate } from "react-router"

type CommentFormProps = {
    id: string
    username: string
    body: string
    date: string
    editCommentData?: { 
        id: number
        username: string
        body: string
        date: string
    }
}

function CommentForm(props: CommentFormProps) {
    const { editCommentData } = props

    const [username, setUsername] = useState('')
    const [body, setBody] = useState('')
    const [date, setDate] = useState('')
    const [commentId, setCommentId] =useState<number | null>(null)

    const [comments, setComments] = useState<{ id: string; name: string }[] | null>(null)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`${API_URL}/comments`)
            const commentsData = await res.json()

            setComments(commentsData)

            if (editCommentData) {
                console.log('editing')

                setCommentId(editCommentData.id)
                setUsername(editCommentData.username)
                setBody(editCommentData.body)
                setDate(editCommentData.date)
            } else {
                setDate(commentsData[0].id)
            }

        }

        fetchComments()
    }, [editCommentData])
    
    const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)
    const bodyHandler = (event: React.ChangeEvent<HTMLInputElement>) => setBody(event.target.value)
    const dateHandler = (event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(!username || !body) {
            setError('Username and body is required')
            return
        }

        const newComment = {
            username,
            body,
            date
        }

        

        if (editCommentData) {
            const { data } = await axios.put(`${API_URL}/comments/${commentId}`, newComment)
            navigate('/project/comments/' + data.id)
        } else {
            const { data } = await axios.post(`${API_URL}/comments`, newComment)
            navigate('/project/comments/' + data.id)
        }
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username"  value={username} onChange={usernameHandler}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="body">Body:</label>
                    <input type="text" name="body" id="body"  value={body} onChange={bodyHandler}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="date">Date:</label>
                    <input type="text" name="date" id="date"  value={date} onChange={dateHandler}/>
                </div>
                <button type='submit'>
                    {editCommentData ? 'Edit Comment' : 'Add a Comment'}
                </button>

                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
export default CommentForm