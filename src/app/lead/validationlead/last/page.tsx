import Link from "next/link";

export default function last() {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
      <div className="bg-clip-text text-transparent bg-custom-gradient text-[32px]">
        Thank You
      </div>
      <Link
        href="/lead"
        className="border-2 border-[#8C57EA] text-[#8C57EA] text-[12px] font-normal bg-[#eadfff] px-4 py-2 rounded-[28px] max-md:rounded-2xl"
      >
        Go to Leads
      </Link>
    </div>
  );
}
