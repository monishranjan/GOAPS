import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full bg-[#2c3a13] text-white px-6 py-3 my-4 flex justify-between items-center">
      <span className="text-xl font-semibold">Enrollment ID: R509V67</span>
      <div>
        <button className="text-white px-4 py-2 font-semibold text-xl" onClick={() => navigate("/home")}>
          Home
        </button>
        <button className="text-white px-4 py-2 font-semibold text-xl" onClick={handleLogout}>
          Logout
        </button>
        <button className="text-white px-4 py-2 font-semibold text-xl">
          Quick Links
        </button>
      </div>
    </div>
  );
};

export default Navbar;
