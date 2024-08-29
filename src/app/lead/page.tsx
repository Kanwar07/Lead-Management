import ContinueButton from "@/components/uploadlead/ContinueButton";
import TitleSectionUpload from "@/components/uploadlead/TitleSectionUpload";
import UploadLead from "@/components/uploadlead/UploadLead";
import React from "react";

export default function page() {
  return (
    <main className="w-full flex flex-col justify-between bg-[#fafbfc] font-sofia">
      <TitleSectionUpload />
      <UploadLead />
      <ContinueButton />
    </main>
  );
}
