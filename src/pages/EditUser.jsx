import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Api/api";
import { toast } from "react-toastify";

const EditUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.updateUser(inputs);
      toast.success("User Updated !");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Error While Update !");
    }
  }

  async function getUserById() {
    const response = await api.getUserById(id);
    setInputs(response.data);
  }

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div>
      <section className="text-gray-600" style={{ marginTop: "-40px" }}>
        <div className="container px-5 py-24 flex h-screen w-screen justify-center  items-center">
          <form
            className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col"
            onSubmit={handleSubmit}
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Edit User
            </h2>
            <div className="relative mb-4">
              <label for="fullname" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                value={inputs.fullname || ""}
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Update
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
