import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableList = ({ user, deleteUser }) => {
  function handleDeleteUser(user) {
    deleteUser(user);
  }

  const [passwordVisiable, setPasswordVisiable] = useState(false);
  return (
    <tr class="border-t border-gray-200">
      <td class="px-6 py-4">{user.email}</td>
      <td class="px-6 py-4">{user.id}</td>
      <td
        class="px-6 py-4"
        onClick={() => setPasswordVisiable(!passwordVisiable)}
      >
        {passwordVisiable ? user.password : "********"}
      </td>
      <td class="px-6 py-4">{user.fullname}</td>
      <td class="px-6 py-4">
        <Link to={`/editUser/${user.id}`}>
          {" "}
          <button className="bg-transparent hover:bg-green-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Edit
          </button>
        </Link>{" "}
        <button
          className="bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => handleDeleteUser(user)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default TableList;
