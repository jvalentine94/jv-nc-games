import { useState } from "react";
import { patchReviewVotesDown1, patchReviewVotesUp1 } from "../utils/api";
import { Link } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";

const ReviewElement = (props) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
  const [errMessage, setErrMessage] = useState("");

  const handleVote = (option) => {
    if (votes >= 1 || votes <= -1) {
      setErrMessage("Already Voted");
    } else {
      if (option === 1) {
        patchReviewVotesUp1(setVotes, setErr, props.review.review_id);
      } else if (option === -1) {
        patchReviewVotesDown1(setVotes, setErr, props.review.review_id);
      }
    }
  };

  return (
    <div className="ReviewElement">
      <h3>Title: {props.review.title}</h3>
      <p>Review ID: {props.review.review_id}</p>
      <p>Designer: {props.review.designer}</p>
      <p>Owner: {props.review.owner}</p>
      <img src={`${props.review.review_img_url}`} alt="" />
      <p>Category: {props.review.category}</p>
      <p>Created At: {props.review.created_at}</p>
      <p>Votes: {props.review.votes + votes}</p>
      <button
        onClick={() => {
          handleVote(1);
        }}
      >
        Upvote
      </button>
      <button
        onClick={() => {
          handleVote(-1);
        }}
      >
        Downvote
      </button>
      <br></br>
      <Link review={props.review} to={`/comments/${props.review.review_id}`}>
        View Review/Comments Comments
      </Link>
      <ErrorMessage message={errMessage}></ErrorMessage>
    </div>
  );
};

export default ReviewElement;
