import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { API_URL } from "../../../config"
import NavigationBar from '../../components/NavigationBar'

interface Comment {
    id: string
    username: string
    body: string
    date: string
}

function CommentsPage() {

    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        const fetchComments = async () => {
            const res =await fetch(`${API_URL}/comments`)
            const commentsData = await res.json()
            setComments(commentsData)
        }

        fetchComments()
    }, [])

    return(
        <div>
            <NavigationBar/>
            <h1>Comments:</h1>

            {comments.length > 0 && (
                <ul>
                    {comments.map(comment => 
                        <li key={comment.username}>
                            <Link to={`/project/comments/${comment.id}`}>{comment.body}.</Link>
                        </li>
                    )}
                </ul>
            )}
            <Link to='/project/comments/create'>Add New Comment</Link>

        </div>
    )
}
export default CommentsPage