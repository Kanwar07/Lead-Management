"use client";

import { useAppContext } from "@/context";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ButtonSection() {
  const { file, setfile } = useAppContext();

  const removefile = () => {
    if (file) {
      setfile("");
      toast.success("Leads Created Successfully");
    } else {
      toast.error("Please select a file first");
    }
  };

  return (
    <div className="flex flex-row justify-between items-center px-[5%] border-t-2 bg-[#ffffff] max-md:flex-col">
      <Link
        href="/lead"
        className="bg-[#FAFBFC] border-2 text-[14px] font-normal border-[#E2E8F0] px-16 py-3 rounded-[28px] text-[#080F1B] my-4"
      >
        Previous
      </Link>
      <Link
        href="/lead/validationlead/last"
        className="bg-custom-gradient border-2 text-[14px] font-medium px-16 py-3 rounded-[28px] text-[#ffffff] my-4"
        onClick={removefile}
      >
        Continue
      </Link>
    </div>
  );
}
