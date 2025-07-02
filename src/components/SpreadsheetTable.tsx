import React from "react";
import type { SheetRow } from "../data/sheetData";

interface Props {
  filter: string;
  rows: SheetRow[];
}

const SpreadsheetTable: React.FC<Props> = ({ filter, rows }) => {
  const filteredData =
    filter === "All" ? rows : rows.filter((row) => row.status === filter);

  return (
    <div className="border border-gray-200 rounded-md shadow-sm overflow-hidden">
      
      {/* Colored Top Bar */}
      <div className="flex text-xs font-bold">
        <div className="w-20 h-1.5 bg-green-500 rounded-tl-md"></div>
        <div className="flex-1 h-1.5 bg-orange-400 rounded-tr-md"></div>
      </div>

      {/* Table Container with Scrollable Body */}
      <div className="max-h-[320px] overflow-y-auto">
        <table className="min-w-full bg-white text-sm font-sans text-gray-800 text-left">
          <thead className="sticky top-0 z-10 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-300">
            <tr>
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Progress</th>
              <th className="px-5 py-3">Owner</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-gray-400 py-6">
                  No matching rows found.
                </td>
              </tr>
            ) : (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  <td className="px-5 py-4">{row.id}</td>
                  <td className="px-5 py-4">{row.name}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        row.status === "Running"
                          ? "bg-green-100 text-green-700"
                          : row.status === "Paused"
                          ? "bg-yellow-100 text-yellow-700"
                          : row.status === "Completed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-5 py-4">{row.owner}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpreadsheetTable;
