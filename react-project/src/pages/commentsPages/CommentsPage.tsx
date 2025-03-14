import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { API_URL } from "../../../config"
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 40px;
  color: #574631;
`;

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
            <Title>Comments:</Title>
            <div>
                {comments.length > 0 && (
                    <div>
                        {comments.map(comment => 
                            <div key={comment.username}>
                                <Link to={`/project/comments/${comment.id}`}>{comment.body}.</Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div>
                <Link to='/project/comments/create'>Add New Comment</Link>
            </div>
            <Footer />
        </div>
    )
}
export default CommentsPage