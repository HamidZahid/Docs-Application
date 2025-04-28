import React from "react";
import { FaFileCsv } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { FaDownload } from "react-icons/fa";


function Card() {
  return (
    <div className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
      <FaFileCsv />
      <p className="mt-4 font-semibold text-sm leading-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
        molestiae ipsum ex mollitia voluptates doloribus?
      </p>
      <div className="footer absolute w-full  bottom-0 left-0 ">
        <div className="flex justify-between mb-1 px-8 py-2">
            <h5>0.4mb</h5>
            <FaDownload />
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
