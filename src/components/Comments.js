import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getComments,
  deleteComment,
  getReviewById,
  patchCommentVotesUp1,
  patchCommentVotesDown1,
} from "../utils/api";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const [commentState, setCommentState] = useState(false);

  const [review, setReview] = useState({});
  const [err, setErr] = useState(null);
  const [votes, setVotes] = useState(0);
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

  const handleVote = (option, commentId) => {
    if (votes >= 1 || votes <= -1) {
    } else {
      if (option === 1) {
        patchCommentVotesUp1(setVotes, setErr, commentId);
      } else if (option === -1) {
        patchCommentVotesDown1(setVotes, setErr, commentId);
      }
    }
  };

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
          <div className="commentbox" key={comment.comment_id}>
            <h3>Body: {comment.body}</h3>
            <h3>Votes: {comment.votes}</h3>
            <h3>Author: {comment.author}</h3>
            <h3>Review ID: {comment.review_id}</h3>
            <h3>Created At: {comment.created_at}</h3>
            <button
              onClick={() => {
                handleVote(1, comment.comment_id);
              }}
            >
              Upvote
            </button>
            <button
              onClick={() => {
                handleVote(-1, comment.comment_id);
              }}
            >
              Downvote
            </button>
            <button
              onClick={() => {
                deleteComment(
                  comment.comment_id,
                  setCommentState,
                  commentState
                );
              }}
            >
              Delete Comment
            </button>
          </div>
        );
      })}
    </main>
  );
};

export default Comments;
