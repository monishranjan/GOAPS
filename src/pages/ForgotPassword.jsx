import React from "react";
import LeftLogo from "../assets/logos/gateIITRoorke_Logo.png";
import RightLogo from "../assets/logos/iitRoorke.png";

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-grow flex flex-col items-center justify-start">
                {/* Top Header */}
                <div className="w-full flex items-center justify-between mt-6 px-16">
                    <img
                        src={LeftLogo}
                        alt="Logo"
                        className="max-w-[12rem] object-contain"
                    />
                    <div className="text-center font-bold text-4xl text-[#1e280c] leading-12">
                        <h1 className="uppercase">
                            Graduate Aptitude Test in Engineering 2025
                        </h1>
                        <h2 className="">अभियांत्रिकी स्नातक अभिक्षमता परीक्षा 2025</h2>
                        <h3 className="text-2xl">
                            Organising Institute: INDIAN INSTITUTE OF TECHNOLOGY ROORKEE
                        </h3>
                    </div>
                    <img
                        src={RightLogo}
                        alt="Logo"
                        className="max-w-[12rem] object-contain"
                    />
                </div>

                {/* Navbar */}
                <div className="w-full bg-[#2c3a13] text-white px-6 py-3 my-4 flex justify-between items-center">
                    <span className="text-lg font-semibold"></span>
                    <button className="text-white px-4 py-2 font-semibold text-lg">
                        Quick Links
                    </button>
                </div>

                <div className="forms w-full px-48 mt-1">
                    <div className="p-4 bg-[#ebf3dd] text-white w-full rounded-xl flex gap-2">
                        {/* Form Header */}
                        <svg
                            class="w-7 fill-[#1e280c]"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="LockPersonIcon"
                        >
                            <path d="M18 11c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9z"></path>
                            <path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 2c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m0 6c-1.03 0-1.94-.52-2.48-1.32.73-.42 1.57-.68 2.48-.68s1.75.26 2.48.68c-.54.8-1.45 1.32-2.48 1.32"></path>
                        </svg>
                        <h1 className="text-2xl font-bold text-[#1e280c]">Forgot Credentials</h1>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="bg-[#2c3a13] text-white text-center px-6 pt-4 pb-6">
                <button className="text-white px-4 py-2 text-xs font-medium">
                    Copyright @ <span className="underline font-normal">GATE</span> 2025
                </button>
            </footer>
        </div>
    );
};

export default ForgotPassword;