import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersListReducer } from "./usersListReducer.js";
import { postsListReducer } from "./postListReducer.js";
import { todoListReducer } from "./todoListReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createPostReducer } from "./createPostReducer.js";

const rootReducer = combineReducers({
  users: usersListReducer,
  posts: postsListReducer,
  todo: todoListReducer,
  createPost: createPostReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
