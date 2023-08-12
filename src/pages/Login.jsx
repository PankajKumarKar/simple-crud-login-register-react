import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/profile");

      const user = Array.from(response.data).find(
        (user) => user.email === inputs.email
      );

      if (user) {
        if (user.password === inputs.password) {
          navigate("/dashboard");
          toast.success("Login Successful !", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Password Invalid !");
        }
      } else {
        toast.warn("User Not Found Please Register !");
      }
    } catch (error) {
      toast.error("Error While Login !");
    }
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
            <p className="text-lg text-rose-700 mt-4">Are you new ? </p>
            <Link to="/signup">
              <button className=" mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                SignUp
              </button>
            </Link>
          </div>
          <form
            className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            onSubmit={handleSubmit}
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Login
            </h2>

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
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
