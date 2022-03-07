import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import ReviewElement from "./ReviewElement";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortby, setSortby] = useState("");
  const [sortReq, setSortReq] = useState(false);
  const { review_slug } = useParams();

  useEffect(
    (sortby) => {
      getReviews(review_slug, sortby).then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
      });
    },
    [review_slug, sortReq]
  );

  const handleSort = () => {
    console.log("SORT");
    setSortReq(!sortReq);
  };

  return (
    <main className="Reviews">
      <h2>All {review_slug} Reviews</h2>
      <h3>
        Sort By:
        <select
          onChange={(event) => {
            setSortby(event.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
        </select>
        <button
          onClick={() => {
            handleSort();
          }}
        >
          Go
        </button>
      </h3>

      <ul>
        {reviews.map((review) => {
          return (
            <ReviewElement
              review={review}
              key={review.review_id}
            ></ReviewElement>
          );
        })}
      </ul>
    </main>
  );
};

export default Reviews;
