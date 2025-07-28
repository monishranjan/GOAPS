import { MdHome } from "react-icons/md";

const ApplicationStatusCard = ({ onResultOpen }) => {
  return (
    <div className="text-white rounded-xl mt-6 border border-[#ced5c2] shadow-sm">
      <div className="w-full bg-[#2c3a13] rounded-t-xl">
        <h1 className="text-2xl font-semibold p-4">Application Status</h1>
      </div>
      <div className="p-10">
        <div className="border text-xl border-[#ced5c2] bg-[#ebf3dd] rounded-xl shadow-sm">
          <div className="flex items-center text-black px-4 py-5 border-b border-[#ced5c2]">
            <span className=" w-3/12 ">Enrollment Id</span>
            <span>R509V67</span>
          </div>
          <div className="flex items-center text-black px-4 py-5 border-b border-[#ced5c2]">
            <span className=" w-3/12 ">Applicant Name</span>
            <span>MONISH RANJAN</span>
          </div>
          <div className="flex items-center text-black px-4 py-5">
            <span className=" w-3/12 ">Applicant Status</span>
            <span>Your GATE 2025 results are available for viewing.</span>
          </div>
        </div>

        {/* Result Button */}
        <div className="mt-10 flex justify-end text-white font-medium text-base border-b border-[#ced5c2] pb-3">
          <button
            className="px-6 py-2 rounded-md bg-[#2c3a13] hover:cursor-pointer"
            onClick={onResultOpen}
          >
            VIEW RESULT (CS)
          </button>
        </div>

        {/* Disabled Response Button */}
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

        {/* CCMT Button */}
        <div className="mt-6 flex justify-end text-white font-medium text-base border-b border-gray-400 pb-3">
          <button
            className="px-6 py-2 rounded-md bg-[#2c3a13] hover:bg-[#3c4a23] transition"
            onClick={() => document.title = "CCMT Status"}
          >
            COUNSELLING STATUS (CCMT)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatusCard;
