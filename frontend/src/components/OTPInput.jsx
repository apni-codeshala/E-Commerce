import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import OTPInputComponent from "./OTPInputComponent";
import axiosInstance from "../config/axiosInstance";

const OTPInput = () => {
  const navigate = useNavigate();
  const email = useSelector((store) => store.auth.email);

  function notify(message) {
    toast(message);
  }

  const handleComplete = async (otp) => {
    console.log("Email getted from store", email);
    const data = {
      otp,
      email,
    };
    const response = await axiosInstance.post("otp-verification", data);
    notify(response.data.data.message + ", Login now");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700 w-5/12">
      <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
      <OTPInputComponent onComplete={handleComplete} />
    </div>
  );
};

export default OTPInput;
