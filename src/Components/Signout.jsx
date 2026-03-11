import { Link } from "react-router-dom";
import { useState } from "react";
export default function Signout() {
  const [agency, setagency] = useState("");
  return (
    <>
      <div className="min-h-screen w-screen bg-white text-gray-800  flex flex-col items-center justify-center">
        <div className="border-2 flex flex-col items-start p-6 justify-start border-0.5 border-[#CBCBCB] bg-[#F7F8F9]  padding-box  w-[375px]  min-h-[812px]">
          <p className="font-bold text-[#1D2226] text-[28px] mt-10 h-[69px] w-[200px]">
            Create your PopX account
          </p>

          <div className="flex flex-col items-center w-full gap-6 mt-10">
            <div className="w-full relative">
              <label className="absolute -top-3 bg-[#F7F8F9] w-[110px] left-5 text-[#6C25FF] ">
                Full Name <span className="text-red-700">*</span>
              </label>
              <input
                className="border border-[#CBCBCB] w-full px-3 h-[40px] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full relative">
              <label className="absolute -top-3 bg-[#F7F8F9] w-[120px] left-5 text-[#6C25FF]">
                Phone number<span className="text-red-700">*</span>
              </label>
              <input
                className="border border-[#CBCBCB] w-full px-3 h-[40px] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-full relative">
              <label className="absolute -top-3 bg-[#F7F8F9] w-[110px] left-5 text-[#6C25FF] ">
                Email Address<span className="text-red-700">*</span>
              </label>
              <input
                className="border border-[#CBCBCB] w-full px-3 h-[40px] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
                placeholder="Enter your email address"
              />
            </div>
            <div className="w-full relative">
              <label className="absolute -top-3 bg-[#F7F8F9] w-[100px] left-5 text-[#6C25FF]">
                Password<span className="text-red-700">*</span>
              </label>
              <input
                className="border border-[#CBCBCB] w-full px-3 h-[40px] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
                placeholder="Enter your password"
              />
            </div>
            <div className="w-full relative">
              <label className="absolute -top-3 bg-[#F7F8F9] w-[120px] left-5 text-[#6C25FF]">
                Company name<span className="text-red-700">*</span>
              </label>
              <input
                className="border border-[#CBCBCB] w-full px-3 h-[40px] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
                placeholder="Enter your company name"
              />
            </div>
            <div className="flex flex-col items-start w-full gap-3">
              <p>
                Are u an agency?<span className="text-red-700">*</span>
              </p>
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === "yes"}
                  onChange={() => setagency("yes")}
                  className="w-[25px] h-[25px] bg-white accent-[#6C25FF] border  border-[#919191]   rounded-full aspect-square "
                />
                <p>Yes</p>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === "no"}
                  onChange={() => setagency("no")}
                  className="w-[25px] h-[25px] bg-white accent-[#6C25FF]  border  border-[#919191]   rounded-full aspect-square "
                />
                <p>No</p>
              </div>
            </div>
            <Link
              to="/Profile"
              className="w-full  h-[46px] bg-[#6C25FF] rounded-[6px] flex items-center justify-center text-white font-medium text-[16px] leading-[17px] mt-[150px]"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
