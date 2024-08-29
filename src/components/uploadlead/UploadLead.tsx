"use client";

import Image from "next/image";
import draganddrop from "@/app/assets/draganddrop.svg";
import tick from "@/app/assets/tick.svg";
import { ChangeEvent } from "react";
import { useAppContext } from "@/context";
import filecsv from "@/app/assets/filecsv.svg";
import Papa from "papaparse";

export default function UploadLead() {
  const { file, setfile, leadslength, setleadslength, leads, setleads } =
    useAppContext();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const csvfile = event.target.files?.[0];
    if (csvfile && csvfile.type === "text/csv") {
      setfile(csvfile);
      Papa.parse(csvfile, {
        skipEmptyLines: true,
        complete: (results: Papa.ParseResult<any>) => {
          setleads(results.data);
          setleadslength(results.data.length - 1);
        },
      });
    } else {
      console.log("Please select a valid CSV file.");
    }
  };

  const removefile = () => {
    if (file) {
      setfile("");
    } else {
      console.log("Please select a file first");
    }
  };
  return (
    <div className="mx-[5%] my-4 bg-[#ffffff] ml-20">
      <div className="border border-2 px-4 py-2 rounded-t-xl">
        <h1 className="text-[16px] font-semibold">Upload lead list</h1>
        <p className="text-[12px] font-normal">
          Lorem ipsum dolor sit amet consectetur. Amet suscipit vulputate
          tristique sagittis. Facilisis id ut morbi aliquet duis sed.{" "}
        </p>
      </div>
      <div className="border-x-2 border-b-2 rounded-b-xl flex flex-col">
        <div className="w-full flex flex-col items-center">
          {file ? (
            <div className="bg-[f9f9fe] flex flex-row items-center justify-between border-2 border-[#8C57EA] rounded-xl gap-80 px-6 w-fit py-6 my-10 max-md:flex-col max-md:gap-4">
              <div className="flex flex-row items-center gap-4">
                <Image src={filecsv} alt="filecsv" height={50} width={50} />
                <div className="flex flex-col">
                  <span className="text-[14px] text-[#080F1B] font-medium">
                    {file.name}
                  </span>
                  <span className="text-[11px] text-[#475569] font-normal">
                    {file.size / 1000} kb | {leadslength} lead found
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <label className="bg-clip-text text-transparent bg-custom-gradient text-[12px] font-medium cursor-pointer">
                  Re-upload
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                <span
                  className="text-[#EB5757] text-[12px] font-medium cursor-pointer"
                  onClick={removefile}
                >
                  Delete
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-[#f9f8fe] flex flex-col items-center border-dashed border-2 border-[#8C57EA] rounded-xl w-fit px-20 py-6 my-10 max-md:flex-col max-md:gap-4 max-md:px-10 max-md:py-3">
              <Image
                src={draganddrop}
                alt="draganddrop"
                height={50}
                width={50}
              />
              <span className="text-[16px] font-normal mb-2">
                <label className="font-semibold text-[#5570E8] underline underline-offset-4 cursor-pointer">
                  Click to upload
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>{" "}
                or drag and drop
              </span>
              <span className="text-[12px] font-normal text-[#00000066]">
                only .csv files are accepted - Maximum 10,000 leads
              </span>
            </div>
          )}
          <div className="flex flex-row justify-between gap-80 text-[14px] max-md:flex-col max-md:gap-4">
            <span className="text-[#000000] font-medium">
              Fields Formatting
            </span>
            <button className="bg-clip-text text-transparent bg-custom-gradient">
              Download/View sample
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-20 my-6 text-[12px] font-normal text-[#475569] max-md:flex-col max-md:gap-4">
          <div className="flex flex-col max-md:pl-4">
            <span className="text-[#000000] font-medium">Company name</span>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <span>google</span>
            </div>
            <span className="my-4 text-[#94A3B8]">--------- or ---------</span>
            <span className="text-[#000000] font-medium">Company domain</span>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <span>google.com</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <span>https://www.google.com/</span>
            </div>
          </div>

          <div className="flex flex-col max-md:pl-4">
            <span className="text-[#000000] font-medium">
              LinkedIn Profile URL
            </span>
            <span className="mt-4 text-[#000000] font-medium">
              Allowed: Regular Linkedin URL
            </span>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <span>https://linkedin.com/in/marcbenioff</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <span>https://www.google.com/</span>
            </div>
            <span className="mt-4 text-[#000000] font-medium">
              Not Allowed: Sales Navigator URL
            </span>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <span>https://linkedin.com/in/marcbenioff</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image src={tick} alt="tick" height={10} width={10} />
              <div className="max-md:w-60 max-md:overflow-hidden max-md:text-ellipsis max-md:whitespace-nowrap">
                https://www.linkedin.com/sales/people/ACoAAAAAPwEB4dd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
