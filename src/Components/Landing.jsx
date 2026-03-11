import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <div className="min-h-screen w-screen bg-white text-gray-800  flex flex-col items-center justify-center">
        <div className="border-2 relative flex bg-[#F7F8F9] flex-col items-start p-5 justify-end border-gray-300 w-[375px] h-[812px]">
          <p className="absolute top-[549px] left-[20px] w-[231px] h-[33px] text-left font-bold text-[28px] leading-[33px] tracking-[0px]  text-[#1D2226] opacity-100 font-[Rubik]">
            Welcome to PopX
          </p>
          <p className="absolute top-[592px] left-[20px] w-[232px] h-[48px] text-left text-[18px] leading-[26px] font-normal tracking-[0px] text-[#1D2226] opacity-60 font-[Rubik]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
          <div className="flex flex-col items-center w-full gap-3 mt-5">
            <Link
              to="/Signout"
              className="absolute top-[669px] left-[20px]  w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] flex items-center justify-center text-white text-[16px] font-bold font-[Rubik]"
            >
              Create Account
            </Link>
            <Link
              to="/Signin"
              className="absolute top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] flex items-center justify-center text-[#1D2226] text-[16px] font-bold font-[Rubik]"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
