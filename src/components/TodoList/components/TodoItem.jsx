import { useDispatch } from "react-redux";
import {
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../../../redux/actions";
import { FaTrash, FaCheckSquare, FaRegSquare } from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(todo.completed ? markIncomplete(index) : markCompleted(index));
  };

  return (
    <li className="flex flex-row items-center justify-between border-b-1 border-gray-400 py-2 gap-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleComplete}
      >
        {todo.completed ? (
          <FaCheckSquare className="text-green-500 text-xl mr-3" />
        ) : (
          <FaRegSquare className="text-gray-500 text-xl mr-3" />
        )}
        <span className={`text-2xl ${todo.completed ? " text-gray-500" : ""}`}>
          {todo.text}
        </span>
      </div>

      <div className="space-x-3 ml-8">
        <button
          className="text-sm cursor-pointer bg-red-500 text-white sm:px-4 py-4 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
