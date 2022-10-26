import { addPostsFromApi } from "../reducers/postListReducer.js";

export const fetchPosts = () => {
  return (dispatch) => {
    fetch(`${import.meta.env.VITE_API_URL}/posts`)
      .then((response) => response.json())
      .then((json) => dispatch(addPostsFromApi(json)));
  };
};
