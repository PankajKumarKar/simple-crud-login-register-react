import React, { useEffect, useState } from "react";
import axios from "axios";
import TableList from "../components/TableList";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import api from "../Api/api";
import "react-confirm-alert/src/react-confirm-alert.css";

const usersUrl = "http://localhost:3000/profile";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [len, setLen] = useState(0);

  async function fetchUsers() {
    const response = await axios.get(usersUrl);
    const users = [...response.data];
    setUsers(users);
  }

  function handleDelete(user) {
    try {
      confirmAlert({
        title: "Confirm Delete",
        message: "Are you sure you want to delete this item?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              await api.deleteUser(user.id);
              toast.success(`User: ${user.fullname} Deleted !`);
              setLen(users.length);
            },
          },
          {
            label: "No",
          },
        ],
      });
    } catch (error) {
      toast.error("Error While Deleting User !");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [len]);

  return (
    <div>
      <div class="container mx-auto p-8">
        <h1 class="text-2xl font-bold mb-4">User Table</h1>
        <div class="bg-white shadow-md rounded-lg overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr class="text-left font-semibold">
                <th class="px-6 py-3">Email</th>
                <th class="px-6 py-3">ID</th>
                <th class="px-6 py-3">Password</th>
                <th class="px-6 py-3">Fullname</th>
                <th class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <TableList
                    key={user.id}
                    user={user}
                    deleteUser={() => handleDelete(user)}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
