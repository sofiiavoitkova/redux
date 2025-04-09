import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
} from "./actions";

const initialState = {
  todo: [],
  searchTerm: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter((_, idx) => idx !== action.payload),
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todo: state.todo.map((todo, idx) =>
          idx === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    case MARK_INCOMPLETE:
      return {
        ...state,
        todo: state.todo.map((todo, idx) =>
          idx === action.payload ? { ...todo, completed: false } : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
