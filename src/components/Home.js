import { useEffect, useState } from "react";

import { getAllReviews } from "../utils/api";

import ReviewElement from "./ReviewElement";

import errorImg from "../images/error-image.png";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [sortby, setSortby] = useState("");
  const [orderby, setOrderby] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(true);

  const [sortReq, setSortReq] = useState(false);

  useEffect(() => {
    getAllReviews(sortby, orderby).then((data) => {
      setReviews(data);
      setLoadingStatus(false);
    });
  }, [sortReq]);

  const handleSort = () => {
    setSortReq((currsort) => !currsort);
  };

  return (
    <main className="Reviews">
      <h2>All Reviews</h2>
      <h3 id="Filters">
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
      </h3>
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

export default Home;
