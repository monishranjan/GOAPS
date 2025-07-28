import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSyncAlt } from "react-icons/fa";

const LoginBox = () => {
    const navigate = useNavigate();

    // Hardcoded values (simulate DB)
    const validCredentials = {
        regId: "R509V67",
        password: "password@123",
    };

    // State
    const [regId, setRegId] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [inputCaptcha, setInputCaptcha] = useState("");
    const [error, setError] = useState("");

    // Generate 6-digit captcha
    const generateCaptcha = () => {
        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        setCaptcha(newCode);
        setInputCaptcha("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (regId !== validCredentials.regId || password !== validCredentials.password) {
            setError("Invalid Registration ID or Password.");
            return;
        }
        if (inputCaptcha !== captcha) {
            setError("Incorrect Security Code.");
            return;
        }

        // Success: redirect
        navigate("/admissions-home");
    };

    return (
        <div className="w-full bg-white">
            <h1 className="text-center font-semibold text-xl mb-5">
                Registered Candidates Sign In
            </h1>

            <form onSubmit={handleLogin} className="space-y-4 border border-gray-300 p-7 rounded-xl">

                {/* Registration ID */}
                <div className="flex gap-0 items-center">
                    <label className="w-full text-sm">GATE Registration ID</label>
                    <input
                        type="text"
                        value={regId}
                        onChange={(e) => setRegId(e.target.value)}
                        className="w-full border border-gray-300 px-3 py-2 text-sm"
                        placeholder=""
                        autoComplete="off"
                    />
                </div>

                {/* Password */}
                <div className="flex gap-0 items-center">
                    <label className="w-full text-sm">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 px-3 py-2 text-sm"
                        placeholder=""
                        autoComplete="off"
                    />
                </div>

                {/* Captcha */}
                <div className="flex gap-0 items-center">
                    <label className="w-full text-sm">
                        Security Pin <span className="text-red-800 text-xs">(case sensitive)</span>
                    </label>
                    <input
                        type="text"
                        value={inputCaptcha}
                        onChange={(e) => setInputCaptcha(e.target.value)}
                        className="w-full border border-gray-300 px-3 py-2 text-sm"
                        placeholder=""
                    />
                </div>

                <div className="flex items-center gap-3">
                    <label className="w-full text-sm">
                        Security Pin <span className="text-red-800 text-xs">(case sensitive)</span>
                    </label>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium italic bg-gray-400 px-8 py-1">{captcha}</span>
                        <button
                            type="button"
                            className="text-blue-700 hover:text-blue-900"
                            onClick={generateCaptcha}
                            title="Refresh Security Code"
                        >
                            <FaSyncAlt size={20} />
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="text-red-600 font-semibold text-sm mt-2">{error}</div>
                )}

                {/* Submit */}
                <div className="flex items-center gap-8 justify-end mt-8">
                    <button
                        type="submit"
                        className="bg-[#167d7f] text-sm text-white px-16 py-1 rounded-sm"
                    >
                        Sign In
                    </button>

                    <h1 className="text-sm font-medium">Forgot Password?</h1>
                </div>

                <div className="h-[1px] bg-gray-200 my-6"></div>
                <div className="h-[1px] bg-gray-200 mt- mb-8"></div>
            </form>
        </div>
    );
};

export default LoginBox;
