import React, { useRef, useState } from "react";
import { useAppContext } from "@/context";
import Link from "next/link";

export default function LeadsTable() {
  const { file, leads, setleads } = useAppContext();
  const [editableLeads, setEditableLeads] = useState([...leads]);

  const handleCellBlur = (
    rowIndex: number,
    fieldIndex: number,
    event: React.FocusEvent<HTMLTableCellElement>
  ) => {
    const updatedLeads = [...editableLeads];
    updatedLeads[rowIndex][fieldIndex] = event.target.textContent || "";
    setEditableLeads(updatedLeads);
    setleads(updatedLeads);
  };

  return (
    <>
      {file ? (
        <table className="border-r-2 border-collapse w-full">
          <thead>
            <tr>
              <th className="border-y-2 border-r-2 border-[#E2E8F0] text-[12px] font-normal text-[#080F1B] text-left py-3 px-4 bg-[#F2F5F8]"></th>
              <th className="border-y-2 border-r-2 border-[#E2E8F0] text-[12px] font-normal text-[#080F1B] text-left py-3 px-4 bg-[#F2F5F8]">
                NAME
              </th>
              <th className="border-y-2 border-r-2 border-[#E2E8F0] text-[12px] font-normal text-[#080F1B] text-left py-3 px-4 bg-[#F2F5F8]">
                LAST NAME
              </th>
              <th className="border-y-2 border-r-2 border-[#E2E8F0] text-[12px] font-normal text-[#080F1B] text-left py-3 px-4 bg-[#F2F5F8]">
                COMPANY DOMAIN
              </th>
              <th className="border-y-2 border-[#E2E8F0] text-[12px] font-normal text-[#080F1B] text-left py-3 px-4 bg-[#F2F5F8]">
                LINKEDIN PROFILE URL
              </th>
            </tr>
          </thead>
          <tbody>
            {leads
              .slice(1, leads.length)
              .map((lead: string[], rowIndex: number) => (
                <tr key={rowIndex}>
                  <td className="border-y-2 border-r-2 border-[#E2E8F0] py-3 px-4 text-[12px] font-normal text-left text-[#475569] bg-[#F2F5F8]">
                    {rowIndex + 1}
                  </td>
                  {lead.map((field, fieldIndex) => (
                    <td
                      key={fieldIndex}
                      contentEditable="true"
                      className="border-y-2 border-r-2 border-[#E2E8F0] py-3 px-4 text-[12px] font-normal text-left text-[#475569]"
                      onBlur={(e) => handleCellBlur(rowIndex, fieldIndex, e)}
                      suppressContentEditableWarning={true}
                    >
                      {field}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-fill flex justify-center items-center">
          <Link
            href="/lead"
            className="border-2 border-[#8C57EA] text-[#8C57EA] text-[12px] font-normal bg-[#eadfff] px-4 py-2 rounded-[28px] max-md:rounded-2xl"
          >
            Go to Leads
          </Link>
        </div>
      )}
    </>
  );
}
