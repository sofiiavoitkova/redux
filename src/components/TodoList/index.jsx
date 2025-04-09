import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import {
  selectTodoList,
  selectTodoFilter,
} from "../../redux/selectors/todoSelectors";

const TodoList = () => {
  const todo = useSelector(selectTodoList);
  const filter = useSelector(selectTodoFilter);

  const filteredTasks = todo.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "INCOMPLETE") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.length === 0 ? (
        <li className="my-2 text-xl italic text-gray-500">
          No tasks yet. Add one above!
        </li>
      ) : (
        filteredTasks.map((todo, id) => (
          <TodoItem key={todo.id} todo={todo} id={id} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
