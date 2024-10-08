"use client";

import Image from "next/image";
import arrowback from "@/app/assets/arrowback.svg";
import { useAppContext } from "@/context";
import Link from "next/link";
import toast from "react-hot-toast";

export default function TitleSectionValidation() {
  const { file, setfile } = useAppContext();

  const removefile = () => {
    if (file) {
      setfile("");
      toast.success("Successfully Deleted");
    } else {
      toast.error("Please select a file first");
    }
  };

  return (
    <div className="flex flex-row justify-between px-[5%] py-6 border-2 rounded-b-lg bg-[#ffffff] ml-20 max-md:flex-col max-md:gap-6 max-md:items-center">
      <div className="flex flex-row items-center gap-2">
        <Link href="/lead">
          <Image src={arrowback} alt="arrowback" height={25} width={25} />
        </Link>
        {file ? (
          <span className="text-[20px] font-semibold text-[#080F1B] max-md:mr-10">
            {file.name}
          </span>
        ) : (
          <span className="text-[20px] font-semibold text-[#080F1B] max-md:mr-10">
            Untitled
          </span>
        )}
        <span className="text-[12px] font-medium text-[#F2994A] bg-[#FBEEE2] px-3 py-1 rounded-[8px]">
          In Progress
        </span>
      </div>
      <div className="flex flex-row gap-4">
        <button className="border-2 border-[#8C57EA] text-[#8C57EA] text-[12px] font-normal bg-[#eadfff] px-4 py-2 rounded-[28px] max-md:rounded-2xl">
          Rename Leads List
        </button>
        <button
          className="border-2 border-[#EB5757] text-[#EB5757] text-[12px] font-normal bg-[#FFF3F3] px-4 py-2 rounded-[28px] max-md:rounded-2xl"
          onClick={removefile}
        >
          Delete Leads List
        </button>
      </div>
    </div>
  );
}
