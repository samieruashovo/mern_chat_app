import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 pt-10 pr-16 pb-16 pl-16 mt-2 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-white-500">Login</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-white text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-white text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block text-white"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-white text-black hover:bg-gray-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
