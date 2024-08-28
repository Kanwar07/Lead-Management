import Image from "next/image";
import arrowback from "@/app/assets/arrowback.svg";

export default function TitleSection() {
  return (
    <div className="flex flex-row justify-between px-8 py-6">
      <div className="flex flex-row gap-2">
        <Image src={arrowback} alt="arrowback" height={25} width={25} />
        <span>Untitled</span>
        <span>In Progress</span>
      </div>
      <div className="flex flex-row gap-2">
        <button>Remove Leads List</button>
        <button>Delete Leads List</button>
      </div>
    </div>
  );
}
