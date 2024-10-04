import { useRef } from "react";

const OTPInput = ({ length = 6, onComplete }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow single character input
    if (value.length > 1) {
      return;
    }

    // Move to the next input
    if (value) {
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }

    // Call the onComplete function if OTP is filled
    if (index === length - 1 && value) {
      const otp = inputRefs.current.map((input) => input.value).join("");
      onComplete(otp);
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input if backspace is pressed
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 border-2 border-gray-300 rounded-lg text-2xl text-center focus:outline-none focus:border-blue-500 transition duration-200"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
