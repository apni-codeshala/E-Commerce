import { useNavigate } from "react-router-dom";

import OTPInputComponent from "./OTPInputComponent";
import axiosInstance from "../config/axiosInstance";

const OTPInput = () => {
  const navigate = useNavigate();

  const handleComplete = async (otp) => {
    const response = await axiosInstance.post();
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
      <OTPInputComponent onComplete={handleComplete} />
    </div>
  );
};

export default OTPInput;
