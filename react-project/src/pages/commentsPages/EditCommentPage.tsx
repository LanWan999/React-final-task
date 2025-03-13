import React from 'react'
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { API_URL } from "../../../config"
import axios, { AxiosError } from "axios"
import NavigationBar from '../../components/NavigationBar'
import CommentForm from '../../components/CommentForm'

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

function EditCommentPage() {

    const { id } = useParams()
    

    const [comment, setComment] = useState<CommentFormProps["editCommentData"] | null>(null)
    const [error, setError] = useState('')
    

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const { data } = await axios(`${API_URL}/comments/${id}`)
                setComment(data)
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(error)
                    setError(error.message)
                } else {
                    setError('Unexpected error')
                }
            }
        }
        fetchData()
    }, [id])

    if (error) {
        return <p>{error}</p>
    }

    if (!comment) {
        return "Loading..."
    }

    const { username, body, date, id: commentId } = comment || {}

    return(
        <div>
            <NavigationBar/>
            <h1>Edit Comment id: {id}</h1>
            
            <CommentForm
                id={commentId.toString()} 
                username={username}
                body={body}
                date={date}
                editCommentData={comment}
            />
        </div>
    )
}

export default EditCommentPage