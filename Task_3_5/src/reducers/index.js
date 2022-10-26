import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersListReducer } from "./usersListReducer.js";
import { postsListReducer } from "./postListReducer.js";
import { todoListReducer } from "./todoListReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: usersListReducer,
  posts: postsListReducer,
  todo: todoListReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
