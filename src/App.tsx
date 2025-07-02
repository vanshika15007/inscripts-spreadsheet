import { useState } from "react";
import SpreadsheetTable from "./components/SpreadsheetTable";
import Toolbar from "./components/Toolbar";
import { sheetData } from "./data/sheetData";
import type { SheetRow } from "./data/sheetData";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [rows, setRows] = useState<SheetRow[]>(sheetData);

  // ✅ Add Row
  const handleAddRow = () => {
    const newRow: SheetRow = {
      id: rows.length + 1,
      name: `Campaign ${rows.length + 1}`,
      status: "Draft",
      progress: Math.floor(Math.random() * 100),
      owner: `User ${rows.length + 1}`,
    };
    setRows([...rows, newRow]);
    console.log("✅ New dummy row added:", newRow);
  };

  // ✅ Export as CSV
  const handleExport = () => {
    const headers = ["ID", "Name", "Status", "Progress", "Owner"];
    const csvRows = [
      headers.join(","),
      ...rows.map((row) =>
        [row.id, row.name, row.status, row.progress, row.owner].join(",")
      ),
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "spreadsheet_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("📤 Dummy export triggered.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">📊 Inscripts Spreadsheet</h1>
        <p className="text-gray-700 mt-2">React + Tailwind + TypeScript + Table</p>
      </header>

      <section className="bg-white p-4 rounded shadow">
        <Toolbar
          active={activeFilter}
          onFilterChange={setActiveFilter}
          onAddRow={handleAddRow}
          onExport={handleExport}
        />
        <SpreadsheetTable filter={activeFilter} rows={rows} />
      </section>
    </div>
  );
}

export default App;
