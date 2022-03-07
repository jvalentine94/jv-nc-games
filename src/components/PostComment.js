import { useState } from "react";

import { postComment } from "../utils/api";

const PostComment = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [reviewId, setReviewId] = useState("");

  const handleSubmit = (reviewId, author, body) => {
    postComment(reviewId, author, body).then(() => {
      setBody("");
      setAuthor("");
      setReviewId("");
    });
  };

  return (
    <div>
      <br></br>
      <form
        onSubmit={() => {
          handleSubmit(reviewId, author, body);
        }}
      >
        <label>
          <span>Body: </span>
        </label>
        <input
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <label>Author: </label>
        <input
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <label>Review_id: </label>
        <input
          value={reviewId}
          onChange={(event) => {
            setReviewId(event.target.value);
          }}
        ></input>
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
    </div>
  );
};

export default PostComment;
