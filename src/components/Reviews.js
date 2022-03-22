import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import ReviewElement from "./ReviewElement";
import errorImg from "../images/error-image.png";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortby, setSortby] = useState("");
  const [orderby, setOrderby] = useState("");
  const [sortReq, setSortReq] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const { review_slug } = useParams();

  useEffect(() => {
    getReviews(review_slug, sortby, orderby).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setLoadingStatus(false);
    });
  }, [review_slug, sortReq]);

  const handleSort = () => {
    setSortReq(!sortReq);
  };

  return (
    <main className="Reviews">
      <h2>{review_slug[0].toUpperCase() + review_slug.slice(1)} Reviews</h2>
      <menu>
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
        <br></br>
        Order by:
        <select
          onChange={(event) => {
            setOrderby(event.target.value);
          }}
        >
          <option value="DESC">High to Low</option>
          <option value="ASC">Low to High</option>
        </select>
        <br></br>
        <button
          onClick={() => {
            handleSort();
          }}
        >
          Go
        </button>
      </menu>
      <h3 hidden={!loadingStatus}>
        <img src={errorImg} alt="Error" id="loadingimage" />
        LOADING
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
