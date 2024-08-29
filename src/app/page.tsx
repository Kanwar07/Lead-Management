import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-fill flex justify-center items-center">
      <Link
        href="/lead"
        className="border-2 border-[#8C57EA] text-[#8C57EA] text-[12px] font-normal bg-[#eadfff] px-4 py-2 rounded-[28px] max-md:rounded-2xl"
      >
        Go to Leads
      </Link>
    </div>
  );
}
