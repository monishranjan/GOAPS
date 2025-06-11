import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

import LeftLogo from "../assets/logos/gateIITRoorke_Logo.png";
import RightLogo from "../assets/logos/iitRoorke.png";

import { MdHome } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header + Navbar + Form inside main */}
      <main className="flex-grow flex flex-col items-center justify-start">
        {/* Top Header */}
        <div className="w-full flex items-center justify-between mt-2 px-16">
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
          <span className="text-xl font-semibold">Enrollment ID: R509V67</span>
          <div className="">
            <button
              className="text-white px-4 py-2 font-semibold text-xl hover:cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Home
            </button>
            <button
              className="text-white px-4 py-2 font-semibold text-xl hover:cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button className="text-white px-4 py-2 font-semibold text-xl hover:cursor-pointer">
              Quick Links
            </button>
          </div>
        </div>

        <div className="forms w-full px-48 mt-1">
          <div className="p-4 bg-[#ebf3dd] text-white w-full rounded-xl flex gap-2 items-center">
            <MdHome size={32} className="text-[#1e280c]" />
            <h1 className="text-2xl font-semibold text-[#1e280c]">
              <span className="font-medium">Welcome,</span> MONISH RANJAN
            </h1>
          </div>

          <div className="text-white rounded-xl mt-6 border border-[#ced5c2] shadow-sm">
            <div className="w-full bg-[#2c3a13] rounded-t-xl">
              <h1 className="text-2xl font-semibold p-4">Application Status</h1>
            </div>

            <div className="p-10">
              <div className="border text-xl border-[#ced5c2] bg-[#ebf3dd] rounded-xl shadow-sm">
                <div className="flex items-center text-black px-4 py-5 border-b border-[#ced5c2]">
                  <span className=" w-3/12 ">Enrollment Id</span>
                  <span className="">R509V67</span>
                </div>
                <div className="flex items-center text-black px-4 py-5 border-b border-[#ced5c2]">
                  <span className=" w-3/12 ">Applicant Name</span>
                  <span className="">MONISH RANJAN</span>
                </div>
                <div className="flex items-center text-black px-4 py-5">
                  <span className=" w-3/12 ">Applicant Status</span>
                  <span className="">
                    Your GATE 2025 results are available for viewing.
                  </span>
                </div>
              </div>

              <div className="mt-10 flex justify-end text-white font-medium text-base border-b border-[#ced5c2] pb-3">
                <button
                  className="px-6 py-2 rounded-md bg-[#2c3a13] hover:cursor-pointer"
                  onClick={() => setIsResultOpen(true)}
                >
                  VIEW RESULT (CS)
                </button>
              </div>
              <div className="mt-6 flex justify-end text-white font-medium text-base border-b border-gray-400 pb-3">
                <button
                  className="px-6 py-2 rounded-md bg-gray-400 text-white cursor-not-allowed opacity-70"
                  onClick={() =>
                    alert("This feature is currently unavailable. Please check back later.")
                  }
                >
                  VIEW RESPONSES (CS)
                </button>

              </div>

              <div className="flex justify-between bg-white p-4 mt-6 rounded-lg shadow-md hover:cursor-pointer">
                <h1 className="text-base text-black">
                  Application Form and Admit Card Download
                </h1>
                <IoIosArrowDown
                  size={24}
                  className="text-[#2c3a13] cursor-pointer"
                />
              </div>

              <div className="digitalFingerprint flex justify-end mt-10">
                <h1 className="text-black text-base italic">
                  Digital FingerPrint: 290733e1dcd64e75dba0ff933be41f63
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-[#2c3a13] text-white text-center px-6 pt-4 pb-6 mt-10">
        <button className="text-white px-4 py-2 text-xs font-medium">
          Copyright @ <span className="underline font-normal">GATE</span> 2025
        </button>
      </footer>

      {/* Modals */}
      {/* Result Modal */}
      {isResultOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[80%] h-[90%]">
            <div className="font-normal border-b border-gray-300 mb-6">
              <h1 className="text-xl text-black px-6 py-4">
                Your GATE 2024 Result [CS]
              </h1>
            </div>

            <div className="overflow-y-auto h-[calc(90%-100px)]">
              <div className="flex">
                <div className="mx-6 w-2/3">
                  <div className="mb-6">
                    <label className="block text-black text-base font-normal mb-1">
                      Name
                    </label>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">MONISH RANJAN</div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-black text-base font-normal mb-1">
                      Registration Number
                    </label>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">CS25S24004015</div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-black text-base font-normal mb-1">
                      Gender
                    </label>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">Male</div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-black text-base font-normal mb-1">
                      Parent's/Guardian's Name
                    </label>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">KALPANA SINGH</div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-black text-base font-normal mb-1">
                      Date of Birth (YYYY-MM-DD)
                    </label>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">2000-11-29</div>
                  </div>
                  <div className="mb-8">
                    <label className="block text-black text-base font-normal mb-1">
                      Test Paper
                    </label>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">Computer Science and Information Technology (CS)</div>
                  </div>
                </div>

                <div className="text-black mx-6 w-1/3 justify-center mt-8">
                  <div className="flex flex-col items-center">
                    <img src="src\assets\image1.png" alt="Photograph" className="h-auto w-[200px] border border-black" />
                    <h1 className="mt-2">Photograph</h1>
                  </div>
                  <div className="flex flex-col items-center mt-12">
                    <img src="src\assets\image2.png" alt="Signature" className="h-auto w-[200px] border border-black" />
                    <h1 className="mt-2">Signature</h1>
                  </div>
                </div>
              </div>

              <div className="flex mx-6 gap-16">
                <div className="w-3/5">
                  <div className="flex items-center justify-start gap-8 mb-8">
                    <h1 className="w-2/6">
                      Marks out of 100
                      <sup className="font-medium relative -top-1">
                        #
                      </sup>
                    </h1>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black"> 56.28 </div>
                  </div>
                  <div className="flex gap-8">
                    <h1 className="w-2/6">
                      Qualifying Marks
                      <sup className="font-medium relative -top-1">
                        ##
                      </sup>
                    </h1>{" "}
                    <div className="flex gap-3 w-full items-start">
                      <div className="flex flex-col items-center">
                        <div className=" w-full px-8 py-2 border font-medium border-black rounded text-black text-center">29.2</div>
                        <h1 className="text-base mt-1 text-center">General</h1>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className=" w-full py-2 px-16 border font-medium border-black rounded text-black text-center">26.2</div>
                        <h1 className="text-base mt-1 text-center">OBC-NCL/EWS</h1>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className=" w-full px-8 py-2 border font-medium border-black rounded text-black text-center">19.4</div>
                        <h1 className="text-base mt-1 text-center">SC/ST/PwD</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="flex items-center gap-8 mb-8">
                    <h1 className="w-3/4">
                      All India Rank in this test paper
                    </h1>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">4283</div>

                  </div>
                  <div className="flex items-center gap-8">
                    <h1 className="w-3/4">
                      GATE Score
                    </h1>
                    <div className=" w-full p-2 border font-medium border-black rounded text-black">593</div>

                  </div>
                </div>
              </div>

              <h1 className="text-base italic mt-6 ml-6">
                <sup className="relative -top-1">#</sup>
                Normalised marks in case of multisession papers (CE and CS).
              </h1>
              <h1 className="text-base italic mt-4 ml-6 mb-6">
                <sup className="relative -top-1">##</sup>A candidate is
                considered qualified if the marks secured are greater than or
                equal to the qualifying marks in the respective category, for
                which a valid category certificate, if applicable, must be
                producted along with the Score Card.
              </h1>
            </div>

            <div className="flex justify-end border-t border-gray-300 pt-4 mb-6">
              <button
                className="text-black text-base border border-black px-3 py-1.5 rounded-md mx-6 hover:cursor-pointer"
                onClick={() => setIsResultOpen(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responses Modal */}
      {isResponseOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[80%]">
            <div className="font-medium border-b border-gray-300 mb-6">
              <h1 className="text-2xl text-black px-6 py-6">
                Your GATE 2024 Result [CS]
              </h1>
            </div>

            <div className="ml-6">
              <div className="mt-6 flex gap-4 text-white font-normal text-base mb-10">
                <button
                  className="px-3 py-2 rounded-md bg-[#2c3a13] hover:cursor-pointer"
                  onClick={() => navigate("/access-denied")}
                >
                  DOWNLOAD MASTER QUESTION PAPER
                </button>
                <button
                  className="px-3 py-2 rounded-md bg-[#2c3a13] hover:cursor-pointer"
                  onClick={() => setIsResponseOpen(true)}
                >
                  DOWNLOAD ANSWER KEY
                </button>
                <button
                  className="px-3 py-2 rounded-md bg-[#2c3a13] hover:cursor-pointer"
                  onClick={() => setIsResponseOpen(true)}
                >
                  YOUR RESPONSE
                </button>
              </div>
            </div>

            <div className="flex justify-end border-t border-gray-300 pt-6 mb-6">
              <button
                className="text-black text-base border border-black px-4 py-2 rounded-md mx-6 hover:cursor-pointer"
                onClick={() => setIsResponseOpen(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
