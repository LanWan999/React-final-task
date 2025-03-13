import React from 'react'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { API_URL } from "../../../config"
import NavigationBar from '../../components/NavigationBar'
import axios from "axios"
import { useNavigate } from "react-router"

type Comment = {
    id: number
    username: string
    body: string
    date: string
}

function CommentPage() {
    const { id } = useParams()
    console.log(id)

    const [comment, setComment] = useState<Comment | null>(null)

    const navigate = useNavigate()

    console.log(comment)

    useEffect(() => {
        const fetchComment = async () => {
            const res = await fetch(`${API_URL}/comments/${id}`)
            const commentData = await res.json()
            setComment(commentData)
        }
        fetchComment()
    }, [id])


    if (!comment) {
        return <p>Loading...</p>
    }

    const deleteHandler = () => {
        axios.delete(`${API_URL}/comments/${id}`)
        navigate('/project/comments')

    }

    return(
        <div>
            <NavigationBar/>
            <h1>{comment.username}</h1>
            <p>{comment.body}</p>
            <p>{comment.date}</p>
            <div className="controls">
                <button onClick={deleteHandler}>Delete</button>
                <Link to={`/project/comments/edit/${id}`}>Edit</Link>
            </div>
        </div>
    )
}
export default CommentPage