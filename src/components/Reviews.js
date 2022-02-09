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
       
           {reviews.map((review)=>{
               return(
                   <ReviewElement review={review}></ReviewElement>
                )
           })}
       
       </main>
    )
}

export default Reviews;