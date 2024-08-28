"use client";

import Image from "next/image";
import arrowback from "@/app/assets/arrowback.svg";
import { useAppContext } from "@/context";

export default function TitleSection() {
  const { file } = useAppContext();

  return (
    <div className="flex flex-row justify-between px-[5%] py-6 border-y-2 border-r-2 bg-[#ffffff]">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={arrowback}
          alt="arrowback"
          height={25}
          width={25}
          className="mr-2"
        />
        {file ? (
          <span className="text-[20px] font-semibold text-[#080F1B]">
            {file.name}
          </span>
        ) : (
          <span className="text-[20px] font-semibold text-[#080F1B]">
            Untitled
          </span>
        )}
        <span className="text-[12px] font-medium text-[#F2994A] bg-[#FBEEE2] px-3 py-1 rounded-[8px]">
          In Progress
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <button className="border-2 border-[#8C57EA] text-[#8C57EA] text-[12px] font-normal bg-[#eadfff] px-4 py-2 rounded-[28px]">
          Rename Leads List
        </button>
        <button className="border-2 border-[#EB5757] text-[#EB5757] text-[12px] font-normal bg-[#FFF3F3] px-4 py-2 rounded-[28px]">
          Delete Leads List
        </button>
      </div>
    </div>
  );
}
