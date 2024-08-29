import React, { useRef } from "react";
import { useAppContext } from "@/context";

export default function LeadsTable() {
  const { file, leads, setleads } = useAppContext();
  const editableRefs = useRef<(HTMLTableCellElement | null)[]>([]);

  const handleCellBlur = (rowIndex: number, fieldIndex: number) => {
    const cell = editableRefs.current[rowIndex]?.childNodes[fieldIndex];
    if (cell && cell.textContent) {
      const updatedLeads = [...leads];
      updatedLeads[rowIndex + 1][fieldIndex] = cell.textContent;
      setleads(updatedLeads);
    }
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
                      ref={(el) => {
                        if (!editableRefs.current[rowIndex]) {
                          editableRefs.current[rowIndex] = el;
                        }
                      }}
                      className="border-y-2 border-r-2 border-[#E2E8F0] py-3 px-4 text-[12px] font-normal text-left text-[#475569]"
                      onBlur={() => handleCellBlur(rowIndex, fieldIndex)}
                      suppressContentEditableWarning={true}
                    >
                      {field}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}
    </>
  );
}
