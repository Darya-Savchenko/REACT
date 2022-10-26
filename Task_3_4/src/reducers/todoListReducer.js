const defaultState = {
  todo: [],
};

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO_FROM_API":
      return { ...state, todo: [...action.payload] };
    default:
      return state;
  }
};

export const addTodoFromApi = (payload) => ({
  type: "ADD_TODO_FROM_API",
  payload,
});
