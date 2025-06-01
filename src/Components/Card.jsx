import React from "react";
import { FaFileCsv } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

function Card({ data }) {
  return (
    <div className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
      <FaFileCsv />
      <p className="mt-6 font-semibold text-sm leading-tight">
        {data.desc}
      </p>
      <div className="footer absolute w-full  bottom-0 left-0 ">
        <div className="flex justify-between mb-1 px-8 py-2">
          <h5>{data.fileSize}</h5>
            <span>
                {data.close ? <IoIosClose /> : <FaDownload />}
            </span>
          
        </div>
        {data.tag.isOpen && (
            <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}  
      </div>
    </div>
  );
}

export default Card;
