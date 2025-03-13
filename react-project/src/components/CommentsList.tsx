import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'

type Comment = {
    id: string
    username: string
    body: string
    rating: string
}

const CommentsList = () => {
    const [ comments, setComments ] = useState<Comment[] | null>(null)

    useEffect(() => {
        const fetchComments = async () => {

            const { data } = await axios(`${API_URL}/comments`)
            setComments(data)
        }

        fetchComments()
    }, [])

    if (!comments) {
        return 'Loading...'
    }

    if (comments.length === 0) {
        return <div>No comments found</div>
    }

    return(
        <div>
            <div>
                {comments.length > 0 && (
                    <ul className='comment-list'>
                        {comments.map(comment => (
                            <li key={comment.id}>
                                <div>{comment.username}</div>
                                <div>{comment.body}</div>
                                <div>{comment.rating}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
export default CommentsList