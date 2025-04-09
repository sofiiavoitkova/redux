import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  SET_FILTER,
} from "./actionTypes";

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
