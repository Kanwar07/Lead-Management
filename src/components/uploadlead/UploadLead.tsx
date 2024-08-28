import Image from "next/image";
import draganddrop from "@/app/assets/draganddrop.svg";
import tick from "@/app/assets/tick.svg";

export default function UploadLead() {
  return (
    <div className="mx-[5%] my-4 bg-[#ffffff]">
      <div className="border border-2 px-4 py-2 rounded-t-xl">
        <h1 className="text-[16px] font-semibold">Upload lead list</h1>
        <p className="text-[12px] font-normal">
          Lorem ipsum dolor sit amet consectetur. Amet suscipit vulputate
          tristique sagittis. Facilisis id ut morbi aliquet duis sed.{" "}
        </p>
      </div>
      <div className="border-x-2 border-b-2 rounded-b-xl flex flex-col">
        <div className="w-full flex flex-col items-center">
          <div className="bg-[#f9f8fe] flex flex-col items-center border-dashed border-2 border-[#8C57EA] rounded-xl w-fit px-20 py-6 my-10">
            <Image src={draganddrop} alt="draganddrop" height={50} width={50} />
            <span className="text-[16px] font-normal">
              <button className="font-semibold text-[#5570E8] underline underline-offset-4">
                Click to upload
              </button>{" "}
              or drag and drop
            </span>
            <span className="text-[12px] font-normal text-[#00000066]">
              only .csv files are accepted - Maximum 10,000 leads
            </span>
          </div>
          <div className="flex flex-row justify-between gap-80 text-[14px]">
            <span className="text-[#000000] font-medium">
              Fields Formatting
            </span>
            <button className="bg-clip-text text-transparent bg-custom-gradient">
              Download/View sample
            </button>
          </div>
          <div className="flex flex-row gap-20 my-6 text-[12px] font-normal text-[#475569]">
            <div className="flex flex-col">
              <span className="text-[#000000] font-medium">Company name</span>
              <div className="flex flex-row items-center gap-2">
                <Image src={tick} alt="tick" height={10} width={10} />
                <span>google</span>
              </div>
              <span className="my-4 text-[#94A3B8]">
                --------- or ---------
              </span>
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
            <div className="flex flex-col">
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
                <span>
                  https://www.linkedin.com/sales/people/ACoAAAAAPwEB4dd
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
