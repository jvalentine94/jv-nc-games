import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jv-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getAllReviews = (sortby, orderby) => {
  if (sortby === "" && orderby === "") {
    return gamesApi.get("/reviews").then(({ data }) => {
      return data.reviews;
    });
  } else if (sortby !== "" && orderby === "") {
    return gamesApi.get(`/reviews?sort_by=${sortby}`).then(({ data }) => {
      return data.reviews;
    });
  } else if (sortby === "" && orderby !== "") {
    return gamesApi.get(`/reviews?order_by=${orderby}`).then(({ data }) => {
      return data.reviews;
    });
  } else if (sortby !== "" && orderby !== "") {
    return gamesApi
      .get(`/reviews?sort_by=${sortby}&order_by=${orderby}`)
      .then(({ data }) => {
        return data.reviews;
      });
  }
};

export const getReviews = (review_slug, sortby, orderby) => {
  if (sortby === "" && orderby === "") {
    return gamesApi.get(`/reviews?category=${review_slug}`).then(({ data }) => {
      return data.reviews;
    });
  } else if (sortby !== "" && orderby === "") {
    return gamesApi
      .get(`/reviews?category=${review_slug}&sort_by=${sortby}`)
      .then(({ data }) => {
        return data.reviews;
      });
  } else if (sortby === "" && orderby !== "") {
    return gamesApi
      .get(`/reviews?category=${review_slug}&order_by=${orderby}`)
      .then(({ data }) => {
        return data.reviews;
      });
  } else if (sortby !== "" && orderby !== "") {
    return gamesApi
      .get(
        `/reviews?category=${review_slug}&sort_by=${sortby}&order_by=${orderby}`
      )
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

  gamesApi.patch(`/reviews/${reviewID}`, { inc_votes: 1 }).catch((err) => {
    setVotes((oldVotes) => oldVotes - 1);
    setErr("Error, please try again");
  });
};

export const patchReviewVotesDown1 = (setVotes, setErr, reviewID) => {
  setVotes((currVotes) => currVotes - 1);
  setErr(null);

  gamesApi.patch(`/reviews/${reviewID}`, { inc_votes: -1 }).catch((err) => {
    setVotes((oldVotes) => oldVotes + 1);
    setErr("Error, please try again");
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const deleteComment = (comment_id, setCommentState) => {
  return gamesApi
    .delete(`/comments/${comment_id}`)
    .then(() => {
      console.log("SUCC");
      setCommentState((currCommentState) => {
        console.log(currCommentState);
        return !currCommentState;
      });
    })
    .catch(() => {
      console.log("ERR");
    });
};

export const postComment = (review_id, username, body, setCommentState) => {
  const postData = {
    username: username,
    body: body,
  };

  return gamesApi
    .post(`/reviews/${review_id}/comments`, postData)
    .then((res) => {
      setCommentState((currState) => !currState);
    });
};

export const patchCommentVotesUp1 = (setVotes, setErr, commentID) => {
  setVotes((currVotes) => currVotes + 1);
  setErr(null);

  gamesApi.patch(`/comments/${commentID}`, { inc_votes: 1 }).catch((err) => {
    setVotes((oldVotes) => oldVotes - 1);
    setErr("Error, please try again");
  });
};

export const patchCommentVotesDown1 = (setVotes, setErr, commentID) => {
  setVotes((currVotes) => currVotes - 1);
  setErr(null);

  gamesApi.patch(`/comments/${commentID}`, { inc_votes: -1 }).catch((err) => {
    setVotes((oldVotes) => oldVotes + 1);
    setErr("Error, please try again");
  });
};
