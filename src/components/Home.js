import { useEffect, useState } from "react";

import { getAllReviews } from "../utils/api";

import ReviewElement from "./ReviewElement";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [sortby, setSortby] = useState("");
  const [sortReq, setSortReq] = useState(false);

  useEffect(
    (sortby) => {
      getAllReviews(sortby).then((data) => {
        setReviews(data);
      });
    },
    [sortReq]
  );

  const handleSort = () => {
    setSortReq(!sortReq);
  };

  return (
    <main className="Reviews">
      <h2>All Reviews</h2>
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

export default Home;
