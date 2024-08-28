import ContinueButton from "@/components/uploadlead/ContinueButton";
import TitleSection from "@/components/uploadlead/TitleSection";
import UploadLead from "@/components/uploadlead/UploadLead";
import React from "react";

export default function page() {
  return (
    <main className="w-full flex flex-col justify-between bg-[#fafbfc] font-sofia">
      <TitleSection />
      <UploadLead />
      <ContinueButton />
    </main>
  );
}
