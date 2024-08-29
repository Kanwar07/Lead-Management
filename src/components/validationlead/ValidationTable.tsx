"use client";

import closecircle from "@/app/assets/closecircle.svg";
import people from "@/app/assets/people.svg";
import { useAppContext } from "@/context";
import Image from "next/image";
import LeadsTable from "./LeadsTable";

export default function ValidationTable() {
  const { file, leadslength, invalidleads } = useAppContext();
  return (
    <div className="mx-[2.5%] my-4 border border-2 border-[#E2E8F0] rounded-[12px] bg-[#ffffff] h-[32rem] overflow-y-scroll ml-20">
      <div className="flex flex-row items-center justify-between px-4 py-4 max-md:flex-col max-md:gap-8">
        <div className="flex flex-col">
          <span className="text-[16px] font-semibold text-[#080F1B]">
            Edit Values
          </span>
          <span className="text-[12px] font-normal text-[#475569]">
            Edit contacts and correct any invalid values.
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 max-md:flex-col">
          <div className="flex flex-row items-center gap-4">
            <span>Toggle</span>
            <div className="flex flex-row max-md:flex-col items-center max-md:items-start gap-2 text-[14px] font-medium text-[#344054]">
              <span>Only show leads with invalid values.</span>{" "}
              <span className="bg-[#FFEBEB] px-2 py-1 flex flex-row gap-2 rounded-[24px]">
                <Image
                  src={closecircle}
                  alt="closecircle"
                  height={10}
                  width={10}
                />{" "}
                <span className="text-[12px] text-[#EB5757]">
                  {invalidleads} Invalid Values
                </span>
              </span>
            </div>
          </div>
          {file ? (
            <div className="flex flex-row items-center gap-2 bg-[#F2F5F8] border-2 border-[#E2E8F0] px-3 py-1 rounded-[28px]">
              <Image src={people} alt="people" height={10} width={10} />
              <span className="text-[12px] font-normal text-[#475569]">
                {leadslength} Leads Found
              </span>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-2 bg-[#F2F5F8] border-2 border-[#E2E8F0] px-3 py-1 rounded-[28px]">
              <Image src={people} alt="people" height={10} width={10} />
              <span className="text-[12px] font-normal text-[#475569]">
                0 Leads Found
              </span>
            </div>
          )}
        </div>
      </div>
      <div>
        <LeadsTable />
      </div>
    </div>
  );
}
