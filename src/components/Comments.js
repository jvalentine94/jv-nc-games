import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

import { getComments , deleteComment} from '../utils/api';

const Comments = (props) => {
    
    const [comments,setComments] = useState([])

    const [commentState,setCommentState] = useState(false)

    const {review_id} = useParams()

    useEffect(()=>{
        console.log('prop test',props)
        getComments(review_id)
        .then((commentsFromApi) => {
            
            setComments(commentsFromApi.comments)
            
        })
    },[review_id,commentState])
   

    return (
        <main className="Comments">
            {/* <h1>Comments for Review ID: {review_id}</h1> */}
            <p>{}</p>
        
           
        {comments.map((comment)=>{
            
            return(
            <div className="commentbox" key={comment.comment_id}>
                <h3>Body: {comment.body}</h3>
                <h3>Votes: {comment.votes}</h3>
                <h3>Author: {comment.author}</h3>
                <h3>Review ID: {comment.review_id}</h3>
                <h3>Created At: {comment.created_at}</h3>
                <button onClick={()=>{deleteComment(comment.comment_id,setCommentState,commentState)}}>Delete Comment</button>
                {/* <button onClick={()=>{deleteComment(comment.comment_id)}}>Delete Comment</button>
                <button onClick={()=>{deleteComment(comment.comment_id)}}>Delete Comment</button> */}
             </div>
             )
        })
        }
    
    </main>
    )
}

export default Comments;