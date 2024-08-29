import TitleSectionValidation from "@/components/validationlead/TitleSectionValidation";
import ButtonSection from "@/components/validationlead/ButtonSection";
import ValidationTable from "@/components/validationlead/ValidationTable";
import React from "react";

export default function page() {
  return (
    <main className="w-full flex flex-col justify-between bg-[#fafbfc] font-sofia">
      <TitleSectionValidation />
      <ValidationTable />
      <ButtonSection />
    </main>
  );
}
