import { ADD_TODO } from "./actions";

const initialState = {
  todos: [],
  searchTerm: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
