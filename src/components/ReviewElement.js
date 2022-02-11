import { useEffect, useState } from 'react';
import { patchReviewVotesDown1, patchReviewVotesUp1} from '../utils/api';
import {Link, Route, Routes} from 'react-router-dom';

const ReviewElement = (props) => {

    const [votes,setVotes] = useState(0)
    const [err, setErr] = useState(null)

    return (
        <div className="ReviewElement" >

                   <h3>Title: {props.review.title}</h3>
                   <p>Review ID: {props.review.review_id}</p>
                   <p>Designer: {props.review.designer}</p>
                   <p>Owner: {props.review.owner}</p>
                   <img src={`${props.review.review_img_url}`}/>                  
                   <p>Category: {props.review.category}</p>
                   <p>Created At: {props.review.created_at}</p>
                   <p>Votes: {props.review.votes+votes}</p>
                    <button onClick={()=>{patchReviewVotesUp1(setVotes,setErr,props.review.review_id)}}>Upvote</button>
                    <button onClick={()=>{patchReviewVotesDown1(setVotes,setErr,props.review.review_id)}}>Downvote</button>
                    <br></br>
                    <Link review ={props.review} to={`/comments/${props.review.review_id}`} >
                        View Comments
                    </Link>
       
       </div>
    )
}

export default ReviewElement;