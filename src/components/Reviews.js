import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { getReviews } from '../utils/api';
import ReviewElement from './ReviewElement'


const Reviews = () => {

    const [reviews,setReviews] = useState([])
    const {review_slug} = useParams()

    useEffect(()=>{
        getReviews(review_slug)
        .then((reviewsFromApi) => {
            console.log('test location')
            setReviews(reviewsFromApi)
        })
    },[review_slug])

    return (
        <main className="Reviews">
       <h2>All Reviews</h2>
       <ul>
           
           {reviews.map((review)=>{
               
               return(
               <li key={review.review_id}>
                   <ReviewElement review={review}></ReviewElement>
                </li>
                )
           })
           }
       </ul>
       </main>
    )
}

export default Reviews;