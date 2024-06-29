import React, { useState } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // State to store OTP digits

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">OTP Verification</h2>
      <div className="flex justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="border-b-2 border-blue-500 focus:border-blue-700 outline-none text-center mx-2 py-2 w-12 text-4xl text-blue-600 placeholder-blue-400 placeholder-opacity-75"
            style={{ borderBottomWidth: '3px' }}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            placeholder="•"
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Enter the 4-digit code sent to your Email
      </p>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        Verify OTP
      </button>
      <div className="mt-4">
        <button className="text-blue-500 hover:underline focus:outline-none">
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
