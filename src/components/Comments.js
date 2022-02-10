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

        });
    }

    // const patchReviewVotesUp1 = () => {
    //     setVotes((oldVotes) => oldVotes+1)
    //     setErr(null)
    //     gamesApi.patch(`/reviews/${props.review.review_id}?inc_votes=1`)
    //     .catch((err)=>{
    //         setVotes((oldVotes) => oldVotes-1)
    //         setErr('Error, please try again')
    //     })
        
    // }

    // const patchReviewVotesDown1 = () => {
    //     setVotes((oldVotes) => oldVotes-1)
    //     setErr(null)
    //     gamesApi.patch(`/reviews/${props.review.review_id}?inc_votes=-1`)
    //     .catch((err)=>{
    //         setVotes((oldVotes) => oldVotes+1)
    //         setErr('Error, please try again')
    //     })
        
    // }

    useEffect(()=>{

        getComments(review_id)
        .then((commentsFromApi) => {
            
            setComments(commentsFromApi.comments)
            
        })
    },[review_id,commentState])
   

    return (
        <main className="Comments">
            {/* <h1>Comments for Review ID: {review_id}</h1> */}
            <p1>{}</p1>
        <ul>
           
        {comments.map((comment)=>{
            
            return(
            <div className="commentbox">
                <h3>Body: {comment.body}</h3>
                <h3>Votes: {comment.votes}</h3>
                <h3>Author: {comment.author}</h3>
                <h3>Review ID: {comment.review_id}</h3>
                <h3>Created At: {comment.created_at}</h3>
                <button onClick={()=>{deleteComment(comment.comment_id)}}>Delete Comment</button>
                {/* <button onClick={()=>{deleteComment(comment.comment_id)}}>Delete Comment</button>
                <button onClick={()=>{deleteComment(comment.comment_id)}}>Delete Comment</button> */}
             </div>
             )
        })
        }
    </ul>
    </main>
    )
}

export default Comments;