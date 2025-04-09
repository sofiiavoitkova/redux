import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const filter = useSelector((state) => state.filter);

  const filteredTasks = todo.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "INCOMPLETE") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTasks.length === 0 ? (
        <li className="my-2 text-lg italic text-gray-500">
          No tasks yet. Add one above!
        </li>
      ) : (
        filteredTasks.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
