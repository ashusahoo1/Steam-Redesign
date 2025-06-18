import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-fit bg-black">
      <div className="w-[95%] mx-auto flex items-center max-sm:flex-col justify-around max-sm:gap-3 pt-[100px] pb-3">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            {/* <img src="/image 125valve.png" alt="" className='w-[180px]'/> */}
            <img src="/Vectorlogo.png" alt="" className="w-[70px] h-[70px]" />
            <h1 className="text-[#76808C] text-[55px] font-[600]">STEAM</h1>
          </div>
          <p className="text-[#76808C] w-[426.26px] max-sm:text-[12.4px] max-sm:w-[330.31px] text-[17.02px] pl-2">
            © 2024 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            VAT included in all prices where applicable.
          </p>
        </div>
        <div className="flex gap-10 max-sm:justify-around">
          <ul className="text-[#F3F3F3]/70 text-[17.02px] max-sm:text-[12px]">
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              About Valve
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Jobs
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Steamworks
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Steam Distribution
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Support
            </li>
          </ul>
          <ul className="text-[#F3F3F3]/70 text-[17.02px] max-sm:text-[12px]">
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Legal
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Steam Subscriber Agreement
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Refunds
            </li>
            <li className="hover:underline hover:text-[#f3f3f3] cursor-pointer">
              Cookies
            </li>
          </ul>
        </div>
        <div className="flex gap-3 max-sm:w-full max-sm:pl-3">
          <p className="text-[#76808C] bg-slate-900 text-[40px] rounded-[50%] px-5 font-[700] hover:bg-slate-600 hover:text-white cursor-pointer max-sm:text-[22px] max-sm:py-2">
            f
          </p>
          <p className="text-[#76808C] bg-slate-900 text-[40px] rounded-[50%] px-5 font-[700] hover:bg-slate-600 hover:text-white cursor-pointer max-sm:text-[20px] max-sm:py-2">
            X
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
