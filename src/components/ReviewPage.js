import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, deleteComment, getReviewById } from "../utils/api";

import CommentElement from "../components/CommentElement";

const ReviewPage = () => {
  const [comments, setComments] = useState([]);

  const [commentState, setCommentState] = useState(false);

  const [review, setReview] = useState({});

  const { review_id } = useParams();

  useEffect(() => {
    getComments(review_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi.comments);
      })

      .then(() => {
        return getReviewById(review_id);
      })
      .then((review) => {
        setReview(review);
      });
  }, [review_id, commentState]);

  return (
    <main className="Comments">
      {/* <h1>Comments for Review ID: {review_id}</h1> */}
      <h3>Title: {review.title}</h3>
      <p>Review ID: {review.review_id}</p>
      <p>Designer: {review.designer}</p>
      <p>Owner: {review.owner}</p>
      <img src={`${review.review_img_url}`} alt="" className="titleimg" />
      <p>{review.review_body}</p>
      <p>Category: {review.category}</p>
      <p>Created At: {review.created_at}</p>
      <p>Votes: {review.votes}</p>

      <h2>Comments</h2>
      {comments.map((comment) => {
        return (
          <CommentElement
            comment={comment}
            setCommentState={setCommentState}
            key={comment.comment_id}
          ></CommentElement>
        );
      })}
    </main>
  );
};

export default ReviewPage;

// 1. Change from comments to ReviewPage
// 2. New element for each comment
// 3. Hand down vote and err state.
