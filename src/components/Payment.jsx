import React from "react";

const Payment = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[500] bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-6">
          Payment Gateway
        </h2>

        <div className="space-y-3">
          <div className="border rounded-lg p-3 text-center">UPI</div>
          <div className="border rounded-lg p-3 text-center">Card</div>
          <div className="border rounded-lg p-3 text-center">Net Banking</div>
        </div>

        <button
          disabled
          className="w-full mt-6 py-3 rounded-lg bg-black text-white font-semibold opacity-70 cursor-not-allowed"
        >
          Pay Now
        </button>

        <p className="text-xs text-center text-gray-500 mt-2">
          🔒 Demo payment • Disabled
        </p>
      </div>
    </div>
  );
};

export default Payment;
