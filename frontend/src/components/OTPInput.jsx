import { useNavigate } from "react-router-dom";

import OTPInputComponent from "./OTPInputComponent";

const OTPInput = () => {
  const navigate = useNavigate();

  const handleComplete = (otp) => {
    console.log("OTP Entered:", otp);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
      <OTPInputComponent onComplete={handleComplete} />
    </div>
  );
};

export default OTPInput;
