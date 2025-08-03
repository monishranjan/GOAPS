import React, { useEffect } from "react";

import Header from "../components/Admissions/Header.jsx";
import Footer from "../components/Admissions/Footer.jsx";
import LoginBox from "../components/Admissions/LoginBox.jsx";

function Admissions() {
  useEffect(() => {
      document.title = "Online Counselling System";
    }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full bg-[#ebebeb] px-88 py-9">
        <div className="loginContainer shadow-2xl flex items-start justify-start bg-white rounded-xl">
          <div className="leftSide pl-3.5 w-3/5 mt-6">
            <LoginBox />
          </div>
          <div className="rightSide pl-3.5 w-2/5">
            <div
              className="relative w-full rounded-tr-xl rounded-br-xl overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(45deg, #167d7fd4, #98d7c2cf), url(https://admissions.nic.in/CCMT/Applicant/Image/RaspberryBg.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            >
              <div className="p-6 text-white">
                <div className="">
                  <h1 className="border-b border-white pb-3 text-left font-semibold text-xl">
                    Important Instructions
                  </h1>
                  <ul className="list-disc pl-5 space-y-2 text-sm mt-8">
                    <li>
                      Confidentiality of Password is solely responsibility of
                      the candidate and all care must be taken to protect the
                      password.
                    </li>
                    <li>
                      Candidates are advised to keep changing the Password at
                      frequent intervals.
                    </li>
                    <li>
                      Never share your password and do not respond to any mail
                      which asks you for your Login-ID/Password.
                    </li>
                    <li>
                      It is strongly recommended that the OTP sent to the
                      applicant for any activity like reset password etc. must
                      not be shared with anyone.
                    </li>
                    <li>
                      For security reasons, after finishing your work, click the
                      LOGOUT button and close all the windows related to your
                      session.
                    </li>
                  </ul>
                </div>
                <p className="mt-32 text-yellow-300 text-sm">
                  <strong className="text-[#fbac1b]">Caution:</strong> Your IP
                  address <span className="text-white">106.201.152.41</span> is
                  being monitored for security purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Admissions;
