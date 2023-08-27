import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex sm:w-[60%] md:w-[50%] lg:w-[30%] p-3 justify-center items-center m-auto mt-9">
      <div className="w-full shadow-lg ">
        <div className="flex justify-between items-center bg-gray-400 p-5 rounded-t-md">
          <h1 className="text-2xl font-bold"> Login</h1>
          <Link onClick={() => navigate(-1)}>
            <AiOutlineClose size={30} />
          </Link>
        </div>
        <div className="px-2 py-3">
          <div className="flex flex-col justify-center ">
            <p>Username</p>
            <input
              type="email"
              name=""
              id=""
              className="border w-auto outline-none p-2"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p>Password</p>
            <input type="password" className="border w-auto outline-none p-2" />
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 my-2 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
          {/* <div className="flex flex-col justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 my-1 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2">
              <FaFacebook size={25}/> Continue with facebook
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 my-1 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2">
             <FaGoogle size={25}/> Continue with Google
            </button>
          </div> */}
          <div className="flex flex-col justify-center mt-2 items-center">
            <p>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-srmibold border px-2 py-1 rounded"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
