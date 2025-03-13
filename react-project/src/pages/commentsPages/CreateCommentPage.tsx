import React from 'react'
import CommentForm from '../../components/CommentForm'


function CreateCommentPage() {
    return(
        <div>
            <h1>Add new Comment</h1>

            <CommentForm
                id=""
                username=""
                body=""
                date=""
            />
        </div>
    )
}
export default CreateCommentPage