import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <ul>
      {todo.length === 0 ? (
        <li className="my-2 text-lg italic text-gray-500">
          No tasks yet. Add one above!
        </li>
      ) : (
        todo.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
