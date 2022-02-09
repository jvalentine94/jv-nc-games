import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

import axios from 'axios';

import { getComments } from '../utils/api';

const Comments = () => {

    const [comments,setComments] = useState([])

    const [commentState,setCommentState] = useState(false)

    const {review_id} = useParams()

    const gamesApi = axios.create({
        baseURL: 'https://jv-games-app.herokuapp.com/api',
    });

    const deleteComment = (comment_id) => {

        return gamesApi.delete(`/comments/${comment_id}`)
        .then(({data}) => {
            setCommentState(!commentState)
            console.log(data)
            // return data
        });
    }

    useEffect(()=>{
    
        getComments(review_id)
        .then((commentsFromApi) => {
            // console.log('USEFFECT',review_id,commentsFromApi)
            setComments(commentsFromApi.comments)
            
        })
    },[review_id,commentState])
   

    return (
        <main className="Comments">
            <h1>Comments for Review Id: {review_id}</h1>
        <ul>
           
        {comments.map((comment)=>{
            
            return(
            <li key={comment.comment_id}>
                <h3>Body: {comment.body}</h3>
                <h3>Votes: {comment.votes}</h3>
                <h3>Author: {comment.author}</h3>
                <h3>Review ID: {comment.review_id}</h3>
                <h3>Created At: {comment.created_at}</h3>
                <button onClick={()=>{deleteComment(comment.comment_id)}}>Delete Comment</button>
             </li>
             )
        })
        }
    </ul>
    </main>
    )
}

export default Comments;