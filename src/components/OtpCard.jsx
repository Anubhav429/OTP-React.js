// import React from "react";
import OtpInput from "./OtpInput";

const OtpCard = () => {

  return (
    
    <div className="bg-[#353343] bg-opacity-70 p-6 rounded-2xl shadow-md w-80 mx-auto text-white text-center mt-">
       {/* Title for OTP Input */}
      <p className="text-lg font-semibold mb-2 flex">Enter OTP</p>
       {/* Horizontal line */}
      <div className="border-b border-gray-500 mb-4"></div>
      {/* OTP Input Component */}
      <OtpInput/>
      {/* Resend OTP Link */}
      <p className="text-sm font-semibold mb-2 underline mt-4">Resend OTP</p>

    </div>
  );
};

export default OtpCard;

