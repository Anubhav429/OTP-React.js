import { useState, useRef } from "react";

const OtpInput = () => {
  // State to store OTP digits (4 input fields)
  const [otp, setOtp] = useState(Array(4).fill(""));
  
  // Reference array to store input field references 
  const inputRefs = useRef([]);

  // Handles input change 
  const handleChange = (index, event) => {
    const value = event.target.value;

    // Allow only single-digit numbers
    if (!/^\d?$/.test(value)) return;

    // Update the OTP state
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field if a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];

      // If the field has a value, clear it
      if (newOtp[index]) {
        newOtp[index] = "";
      } 
      // If the field is already empty, move focus to the previous field and clear it
      else if (index > 0) {
        newOtp[index - 1] = "";
        inputRefs.current[index - 1]?.focus();
      }

      // Update OTP state
      setOtp(newOtp);
    }
  };

  // Handles pasting of a 4-digit OTP directly 
  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData("text").slice(0, 4);

    if (/^\d{1,4}$/.test(pasteData)) {
      // Split the pasted string into an array and fill any remaining fields with empty strings
      const newOtp = pasteData.split("").concat(Array(4 - pasteData.length).fill(""));
      setOtp(newOtp);

      // Move focus to  last filled input field
      inputRefs.current[Math.min(pasteData.length, 3)]?.focus();
    }

    // Prevent default paste behavior
    event.preventDefault();
  };

  return (
    // Container for the OTP input fields
    <div className="flex justify-center gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)} // Assign ref for direct access
          type="text"
          maxLength="1" // Restrict input to one character
          value={digit}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-lg font-bold border-2 border-purple-500 text-black bg-[#a6a6a6] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
      ))}
    </div>
  );
};

export default OtpInput;
