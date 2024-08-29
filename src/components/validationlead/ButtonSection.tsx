import Link from "next/link";

export default function ButtonSection() {
  return (
    <div className="flex flex-row justify-between items-center px-[5%] border-t-2 bg-[#ffffff] max-md:flex-col">
      <Link
        href="/lead"
        className="bg-[#FAFBFC] border-2 text-[14px] font-normal border-[#E2E8F0] px-16 py-3 rounded-[28px] text-[#080F1B] my-4"
      >
        Previous
      </Link>
      <Link
        href="/lead/validationlead"
        className="bg-custom-gradient border-2 text-[14px] font-medium px-16 py-3 rounded-[28px] text-[#ffffff] my-4"
      >
        Continue
      </Link>
    </div>
  );
}
