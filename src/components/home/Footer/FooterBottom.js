import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | Gewaly shopping | All Rights Reserved
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer"></a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
