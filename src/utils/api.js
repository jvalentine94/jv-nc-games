import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jv-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    console.log(data);
    return data.categories;
  });
};

export const getAllReviews = (sortby) => {
  if (sortby === "") {
    return gamesApi.get("/reviews").then(({ data }) => {
      console.log("UTIL1", data);
      return data.reviews;
    });
  } else {
    return gamesApi
      .get("/reviews", { params: { sort_by: sortby } })
      .then(({ data }) => {
        console.log("UTIL2", data);
        return data.reviews;
      });
  }
};

export const getReviews = (review_slug, sortby) => {
  if (sortby === "") {
    return gamesApi.get(`/reviews?category=${review_slug}`).then(({ data }) => {
      return data.reviews;
    });
  } else {
    return gamesApi
      .get(`/reviews?category=${review_slug}`, { params: { sort_by: sortby } })
      .then(({ data }) => {
        return data.reviews;
      });
  }
};

export const getReviewById = (reviewId) => {
  return gamesApi.get(`/reviews/${reviewId}`).then(({ data }) => {
    return data.review;
  });
};

export const patchReviewVotesUp1 = (setVotes, setErr, reviewID) => {
  setVotes((currVotes) => currVotes + 1);
  setErr(null);

  gamesApi.patch(`/reviews/${reviewID}?inc_votes=1`).catch((err) => {
    setVotes((oldVotes) => oldVotes - 1);
    setErr("Error, please try again");
  });
};

export const patchReviewVotesDown1 = (setVotes, setErr, reviewID) => {
  setVotes((currVotes) => currVotes - 1);
  setErr(null);

  gamesApi.patch(`/reviews/${reviewID}?inc_votes=-1`).catch((err) => {
    setVotes((oldVotes) => oldVotes + 1);
    setErr("Error, please try again");
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const deleteComment = (comment_id, setCommentState, commentState) => {
  return gamesApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    setCommentState(!commentState);
    console.log(data);
  });
};

export const postComment = (review_id, username, body) => {
  return gamesApi.post(
    `/reviews/${review_id}/comments?username=${username}&body=${body}`
  );
};

export const patchCommentVotesUp1 = (setComments, setErr, commentID) => {
  console.log(commentID);

  setComments((currVotes) => currVotes + 1);
  setErr(null);

  gamesApi.patch(`/comments/${commentID}`, { inc_votes: 1 }).catch((err) => {
    setComments((oldVotes) => oldVotes - 1);
    setErr("Error, please try again");
  });
};

export const patchCommentVotesDown1 = (setComments, setErr, commentID) => {
  console.log(commentID);
  setComments((currVotes) => currVotes - 1);
  setErr(null);

  gamesApi.patch(`/comments/${commentID}`, { inc_votes: -1 }).catch((err) => {
    setComments((oldVotes) => oldVotes + 1);
    setErr("Error, please try again");
  });
};
