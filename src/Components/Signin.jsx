import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen w-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-start px-5 border border-[#CBCBCB] bg-[#F7F8F9] w-[375px] h-[812px]">
        <p className="font-medium text-[28px] leading-[36px] text-[#1D2226] mt-10 h-[69px] w-[188px]">
          Signin to your PopX account
        </p>

        <p className="font-normal text-[18px] leading-[26px] text-[#1D2226] opacity-60 mt-6 h-[48px] w-[232px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="flex flex-col w-full gap-6 mt-10">
          <div className="w-full relative">
            <label className="absolute -top-2 left-5 px-1 bg-[#F7F8F9] text-[13px] leading-[17px] text-[#6C25FF]">
              Email Address
            </label>
            <input
              className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
              placeholder="Enter your email address"
            />
          </div>

          <div className="w-full relative">
            <label className="absolute -top-2 left-5 px-1 bg-[#F7F8F9] text-[13px] leading-[17px] text-[#6C25FF]">
              Password
            </label>
            <input
              className="w-full h-[40px] px-3 border border-[#CBCBCB] rounded-[6px] bg-[#F7F8F9] text-[#1D2226]"
              placeholder="Enter your password"
            />
          </div>

          <Link
            to="/Profile"
            className="w-full h-[46px] bg-[#CBCBCB] rounded-[6px] flex items-center justify-center text-white font-medium text-[16px]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
