import React, { useEffect, useState } from "react";

const AccessDenied = () => {
  const [reference, setReference] = useState("");

  useEffect(() => {
    const timestamp = Date.now().toString().slice(-10);
    const randomPart = Math.random().toString(36).substr(2, 6).toUpperCase();
    const ref = `Reference #23.7f4d3817.${timestamp}.${randomPart}`;
    setReference(ref);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f2f2] text-[#1b1b1b] font-sans px-6">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Access Denied
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          You don't have permission to access this resource on this server.
        </p>
        <hr className="border-gray-300 my-6" />
        <p className="text-sm text-gray-600">{reference}</p>
      </div>
    </div>
  );
};

export default AccessDenied;
