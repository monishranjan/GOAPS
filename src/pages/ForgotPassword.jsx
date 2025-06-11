import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LeftLogo from "../assets/logos/gateIITRoorke_Logo.png";
import RightLogo from "../assets/logos/iitRoorke.png";
import { IoMdRefresh } from "react-icons/io";
import { MdSend } from "react-icons/md";
import Select from "react-select";
import countryList from "react-select-country-list";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaError, setCaptchaError] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState({ label: "+91", value: "+91" });

    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ a: Math.max(a, b), b: Math.min(a, b) });
        setCaptchaInput("");
        setCaptchaError("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleSendOTP = (e) => {
        e.preventDefault();
        const answer = captcha.a - captcha.b;

        if (parseInt(captchaInput) !== answer) {
            setCaptchaError("Entered captcha value is incorrect!");
            toast.error("Entered captcha value is incorrect!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
            });
            return;
        }

        // Mock email logic - replace with real OTP API later
        toast.success(`OTP sent to ${email}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
        });
    };

    const countryOptions = countryList()
        .getData()
        .map((c) => ({ label: `${c.label} (${c.value})`, value: c.value }));

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-grow flex flex-col items-center justify-start">
                {/* Header */}
                <div className="w-full flex items-center justify-between mt-6 px-16">
                    <img src={LeftLogo} alt="Logo" className="max-w-[12rem]" />
                    <div className="text-center font-bold text-4xl text-[#1e280c]">
                        <h1 className="uppercase">Graduate Aptitude Test in Engineering 2025</h1>
                        <h2 className="">अभियांत्रिकी स्नातक अभिक्षमता परीक्षा 2025</h2>
                        <h3 className="text-2xl">Organising Institute: INDIAN INSTITUTE OF TECHNOLOGY ROORKEE</h3>
                    </div>
                    <img src={RightLogo} alt="Logo" className="max-w-[12rem]" />
                </div>

                {/* Navbar */}
                <div className="w-full bg-[#2c3a13] text-white px-6 py-3 my-4 flex justify-between items-center">
                    <span className="text-lg font-semibold"></span>
                    <button className="text-white px-4 py-2 font-semibold text-lg">Quick Links</button>
                </div>

                {/* Form Header */}
                <div className="forms w-full px-48 mt-1">
                    <div className="p-4 bg-[#ebf3dd] text-white w-full rounded-xl flex gap-2">
                        <svg className="w-7 fill-[#1e280c]" viewBox="0 0 24 24">
                            <path d="M18 11c.7 0 1.37.1 2 .29V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9z"></path>
                            <path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 2c.83 0 1.5.67 1.5 1.5S18.83 18 18 18s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m0 6c-1.03 0-1.94-.52-2.48-1.32.73-.42 1.57-.68 2.48-.68s1.75.26 2.48.68c-.54.8-1.45 1.32-2.48 1.32"></path>
                        </svg>
                        <h1 className="text-2xl font-bold text-[#1e280c]">Forgot Password</h1>
                    </div>
                </div>

                {/* Forgot Password Form */}
                <div className="w-full px-48 py-4">
                    <form onSubmit={handleSendOTP}>
                        <div className="mb-6">
                            <label className="text-base font-normal">Enrollment ID / Email Address</label>
                            <input
                                type="email"
                                className="text-base w-full px-4 py-2 mt-4 border border-gray-400 rounded focus:border-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <p className="mt-2 text-sm">Enter Enrollment ID / Email ID sent during registration.</p>
                        </div>

                        <div className="mb-6">
                            <label className="text-base font-normal">Phone Number</label>
                            <div className="flex gap-2 mt-4 items-center">
                                <Select
                                    className="w-40"
                                    options={countryOptions}
                                    value={countryCode}
                                    onChange={setCountryCode}
                                />
                                <input
                                    type="tel"
                                    className="w-2/3 text-base px-4 py-2 border border-gray-400 rounded focus:border-black"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Mobile Number"
                                    required
                                />
                            </div>
                            <p className="mt-2 text-base">Do not put Zero (0) before the number.</p>
                        </div>

                        <div className="mb-6">
                            <label className="text-lg font-normal flex items-end my-6 italic">
                                <span className="ml-2 bg-black text-white text-3xl px-3 py-2">
                                    {captcha.a} - {captcha.b} =
                                </span>
                                <button type="button" onClick={generateCaptcha} className="ml-4 text-gray-500">
                                    <IoMdRefresh size={32} />
                                </button>
                            </label>

                            <label className="text-lg font-normal">
                                Evaluate the arithmetic expression and enter the answer below.
                            </label>
                            <input
                                type="number"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                className={`w-full text-lg px-3 py-2 mt-4 border rounded ${captchaError ? "border-red-500" : "border-gray-300"
                                    } focus:border-black`}
                                required
                            />
                            {captchaError && (
                                <p className="text-red-500 text-base mt-2">{captchaError}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col sm:flex-row items-center gap-8 mt-12 mb-20">
                            <button
                                type="submit"
                                className="hover:cursor-pointer w-full sm:w-auto flex items-center justify-center gap-4 py-3 px-3 bg-[#2c3a13] text-white rounded"
                            >
                                <MdSend size={24} />
                                <p className="text-lg font-normal">SEND OTP</p>
                            </button>
                            <button
                                type="button"
                                className="text-[#2c3a13] text-lg hover:cursor-pointer"
                                onClick={() => navigate("/")}
                            >
                                GO TO LOGIN PAGE
                            </button>
                        </div>
                    </form>
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
