import { useEffect, useState } from 'react';

import axios from 'axios';

const PostComment = () => {

const [body,setBody] = useState('')
const [author,setAuthor] = useState('')
const [reviewId,setReviewId] = useState('')

const gamesApi = axios.create({
    baseURL: 'https://jv-games-app.herokuapp.com/api',
});

const postComment = (review_id,username,body) => {
    return gamesApi.post(`/reviews/${review_id}/comments?username=${username}&body=${body}`)
    .then(({data}) => {
        setBody("")
        setAuthor("")
        setReviewId("")
        console.log(data)
        return data
    });
}

    return (
       <div>
           <br></br>
            <form onSubmit={()=>{postComment(reviewId,author,body)}}>
                <label>body:  </label>
                <input value={body} onChange={(event) => {setBody(event.target.value)}}></input>
                <br></br>
                <br></br>
                <label>author:  </label>
                <input value={author} onChange={(event) => {setAuthor(event.target.value)}}></input>
                <br></br>
                <br></br>
                <label>review_id:  </label>
                <input value={reviewId} onChange={(event) => {setReviewId(event.target.value)}}></input>
                <br></br>
                <br></br>
                <button >Submit</button>
                <br></br>
            </form>
       </div>
    )
}

export default PostComment;