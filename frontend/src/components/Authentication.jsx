import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { addUser } from "../redux/slices/authSlices";
import { checkIsDataValid } from "../helpers/validate";
import axiosInstance from "../config/axiosInstance";
import OTPInput from "./OTPInput";

const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOTPEntry, setIsOTPEntry] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsLoginPage(!isLoginPage);
  };

  function addUserData(name, email, role) {
    dispatch(addUser({ name, email, role }));
  }

  const handleButtonClick = async () => {
    const message = checkIsDataValid(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isLoginPage) {
        // Sign up logic
        const userData = {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        const response = await axiosInstance.post("signup", userData);
        toast(response.data.data.message);
        setIsOTPEntry(true);
      } else {
        // Sign In Logic
        const userData = {
          email: email.current.value,
          password: password.current.value,
        };
        try {
          const response = await axiosInstance.post("signin", userData);
          toast(response.data.data.msg);
          const token = response.data.data.token;
          localStorage.setItem("jwtToken", token);
          axiosInstance.defaults.headers.common["x-access-token"] = token;
          addUserData(
            response.data.data.name,
            response.data.data.email,
            response.data.data.role,
          );
          navigate("/home");
        } catch (error) {
          console.error("Error in sign in of the user:", error);
          setErrorMessage(`${error.message}`);
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return isOTPEntry ? (
    <OTPInput />
  ) : (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <form
        className="w-5/12 bg-black text-white flex flex-col justify-center items-center py-12 rounded-lg bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 px-2">
          {isLoginPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="px-2 py-3 my-3 w-[90%] bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address *"
          className="px-2 py-3 my-3 w-[90%] bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password *"
          className="px-2 py-3 my-3 w-[90%] bg-gray-700"
          ref={password}
        />
        <p className="text-red-500 font-bold w-[90%]">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-800 w-[90%] rounded"
          onClick={handleButtonClick}
        >
          {isLoginPage ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-6 font-sans text-right text-white font-semibold cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isLoginPage
            ? "New to Platform? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Authentication;
