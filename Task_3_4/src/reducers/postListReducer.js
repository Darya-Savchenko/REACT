const defaultState = {
  posts: [],
};

export const postsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_POSTS_FROM_API":
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
};

export const addPostsFromApi = (payload) => ({
  type: "ADD_POSTS_FROM_API",
  payload,
});
