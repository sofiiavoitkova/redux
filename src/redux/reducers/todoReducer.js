import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  SET_FILTER,
} from "../constants/actionTypes";

const initialState = {
  todo: [],
  filter: "ALL",
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
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    case MARK_INCOMPLETE:
      return {
        ...state,
        todo: state.todo.map((todo) =>
          id === action.payload ? { ...todo, completed: false } : todo
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
