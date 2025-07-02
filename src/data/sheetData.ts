export interface SheetRow {
  id: number;
  name: string;
  status: string;
  progress: number;
  owner: string;
}

export const sheetData: SheetRow[] = [
  { id: 1, name: "Campaign 1", status: "Running", progress: 85, owner: "Alice" },
  { id: 2, name: "Campaign 2", status: "Paused", progress: 45, owner: "Bob" },
  { id: 3, name: "Campaign 3", status: "Completed", progress: 100, owner: "Carol" },
  { id: 4, name: "Campaign 4", status: "Draft", progress: 0, owner: "David" },
];
