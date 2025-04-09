export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
export const SET_FILTER = "SET_FILTER";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});

export const markCompleted = (index) => ({
  type: MARK_COMPLETED,
  payload: index,
});

export const markIncomplete = (index) => ({
  type: MARK_INCOMPLETE,
  payload: index,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
