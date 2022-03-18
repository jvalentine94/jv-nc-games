import { useState } from "react";
import { patchCommentVotesUp1, patchCommentVotesDown1 } from "../utils/api";

const CommentElement = (props) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

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

  const deleteCommentHandler = () => {
    if (props.comment.author === 1) {
      deleteCommentHandler(props.comment.comment_id, props.setCommentState);
    } else {
    }
  };

  return (
    <div className="commentbox" key={props.comment.comment_id}>
      <h3>Body: {props.comment.body}</h3>
      <h3>Votes: {props.comment.votes + votes}</h3>
      <h3>Author: {props.comment.author}</h3>
      <h3>Review ID: {props.comment.review_id}</h3>
      <h3>Created At: {props.comment.created_at}</h3>
      <button
        onClick={() => {
          handleVote(1, props.comment.comment_id);
        }}
      >
        Upvote
      </button>
      <button
        onClick={() => {
          handleVote(-1, props.comment.comment_id);
        }}
      >
        Downvote
      </button>
      <button
        onClick={() => {
          deleteCommentHandler(props.comment.comment_id, props.setCommentState);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CommentElement;
