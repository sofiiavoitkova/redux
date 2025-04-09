import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const taskFilter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="flex justify-start items-center mb-1">
      <select
        className="block w-40 px-3 py-2 text-lg bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-2 focus:border-blue-500"
        value={taskFilter}
        onChange={handleFilterChange}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
    </div>
  );
};

export default FilterButtons;
