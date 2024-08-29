import Link from "next/link";

export default function ContinueButton() {
  return (
    <div className="flex justify-end items-end px-[5%] border-t-2 border-x-2 rounded-t-lg ml-20 bg-[#ffffff] max-md:justify-center max-md:items-center">
      <Link
        href="/lead/validationlead"
        className="bg-custom-gradient px-16 py-3 rounded-full text-[#ffffff] my-4"
      >
        Continue
      </Link>
    </div>
  );
}
