import React from "react";

const filters = ["All", "Running", "Paused", "Completed"];

interface ToolbarProps {
  active: string;
  onFilterChange: (filter: string) => void;
  onAddRow: () => void;
  onExport: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  active,
  onFilterChange,
  onAddRow,
  onExport,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => {
              onFilterChange(filter);
              console.log(`Filter: ${filter}`);
            }}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              active === filter
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onAddRow}
          className="px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
        >
          + Add Row
        </button>
        <button
          onClick={onExport}
          className="px-4 py-2 rounded-md bg-yellow-500 text-white text-sm hover:bg-yellow-600"
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
