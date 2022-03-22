import { useState, useContext } from "react";
import { UserContext } from "../App";
import { postComment } from "../utils/api";
import ErrorMessage from "./ErrorMessage";

const PostComment = (props) => {
  const [body, setBody] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { userState } = useContext(UserContext);

  const handleSubmit = (body) => {
    if (body === "") {
      setErrMessage("Already Voted");
    } else {
      postComment(props.review, userState, body, props.setCommentState)
        .then(() => {
          setBody("");
        })
        .catch((err) => {});
    }
  };

  return (
    <div>
      <br></br>

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

      <button
        onClick={() => {
          handleSubmit(body);
        }}
      >
        Submit
      </button>
      <br></br>
      <ErrorMessage message={errMessage}></ErrorMessage>
    </div>
  );
};

export default PostComment;
