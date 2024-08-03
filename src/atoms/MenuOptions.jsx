import React from "react";

const MenuOptions = ({ job, handleEdit, handleView, handleDelete }) => {
  return (
    <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-2">
      <ul className="flex flex-col">
        <li
          className="cursor-pointer hover:bg-gray-100 p-2"
          onClick={() => handleEdit(job.id)}
        >
          Edit
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2"
          onClick={() => handleView(job)}
        >
          View
        </li>
        <li
          className="cursor-pointer hover:bg-gray-100 p-2"
          onClick={() => handleDelete(job.id)}
        >
          Delete
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
