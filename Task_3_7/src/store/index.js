import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersListReducer } from "./users";
import { postsListReducer } from "./posts";
import { todoListReducer } from "./todo";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createPostReducer } from "./posts";
import { userPageReducer } from "./user";

const rootReducer = combineReducers({
  users: usersListReducer,
  posts: postsListReducer,
  todo: todoListReducer,
  createPost: createPostReducer,
  user: userPageReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
