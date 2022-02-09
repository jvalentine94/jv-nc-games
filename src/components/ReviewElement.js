import { useEffect, useState } from 'react';
import axios from 'axios';
import { getReviews } from '../utils/api';
import {Link} from 'react-router-dom';


const ReviewElement = (props) => {

    const [votes,setVotes] = useState(props.review.votes)
    const [err, setErr] = useState(null)


    const gamesApi = axios.create({
        baseURL: 'https://jv-games-app.herokuapp.com/api',
    });

    const patchReviewVotesUp1 = (review_id) => {
        setVotes((oldVotes) => oldVotes+1)
        setErr(null)
        gamesApi.patch(`/reviews/${props.review.review_id}?inc_votes=1`)
        .catch((err)=>{
            setVotes((oldVotes) => oldVotes-1)
            setErr('Error, please try again')
        })
        
    }

    const patchReviewVotesDown1 = (review_id) => {
        setVotes((oldVotes) => oldVotes-1)
        setErr(null)
        gamesApi.patch(`/reviews/${props.review.review_id}?inc_votes=-1`)
        .catch((err)=>{
            setVotes((oldVotes) => oldVotes+1)
            setErr('Error, please try again')
        })
        
    }

    return (
        <main className="ReviewElement">

                   <h3>Title: {props.review.title}</h3>
                   <p>Review ID: {props.review.review_id}</p>
                   <p>Designer: {props.review.designer}</p>
                   <p>Owner: {props.review.owner}</p>
                   <p>Image Url: {props.review.review_img_url}</p>
                   <img src={`${props.review.review_img_url}`}/>                   
                   <p>Body: {props.review.review_body}</p>
                   <p>Category: {props.review.category}</p>
                   <p>Created At: {props.review.created_at}</p>
                   <p>Votes: {votes}</p>
                    <button onClick={()=>{patchReviewVotesUp1(props.review.review_id)}}>Upvote</button>
                    <button onClick={()=>{patchReviewVotesDown1(props.review.review_id)}}>Downvote</button>
                    <br></br>
                    <Link to={`/comments/${props.review.review_id}`}>
                        View Comments
                    </Link>

       
       </main>
    )
}

export default ReviewElement;