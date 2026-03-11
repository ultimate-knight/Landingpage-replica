export default function Profile() {
  return (
    <div className="min-h-screen w-screen bg-white flex items-center justify-center">
      <div className="relative w-[375px] h-[812px] bg-[#F7F8F9] border border-[#CBCBCB] flex flex-col">
        <div className="w-full h-[68px] bg-white shadow-sm flex items-center px-5">
          <p className="text-[18px] font-medium text-[#1D2226] capitalize">
            account settings
          </p>
        </div>

        <div className="flex flex-row items-center gap-5 px-5 mt-6">
          <div className="relative">
            <img
              src="/Ellipse.png"
              className="w-[76px] h-[76px] rounded-full object-cover"
            />
            <img
              src="/Group.svg"
              className="w-[21px] h-[23px] absolute right-0 bottom-0"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[15px] font-extrabold text-[#1D2226]">
              Marry Doe
            </p>
            <p className="text-[14px] text-[#1D2226]">Marry@Gmail.com</p>
          </div>
        </div>

        <div className="w-full h-px border-t border-dashed border-[#CBCBCB] mt-6" />

        <p className="px-5 mt-5 text-[14px] leading-[22px] text-[#1D2226]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam
        </p>
      </div>
    </div>
  );
}
