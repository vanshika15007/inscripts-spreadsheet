# Inscripts Spreadsheet UI

This project is a front-end-only static spreadsheet prototype built using **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**, as part of the Inscripts React assignment.

It replicates the layout and structure from the provided Figma design with features like filtering tabs, dynamic table rows, and CSV export.

---

## Tech Stack

- React 18  
- TypeScript  
- Tailwind CSS  
- Vite (for fast dev build)

---

## Setup Instructions

Clone the repository and install dependencies:

```bash
npm install
npm run dev
✨ Features
Filter tabs (All, Running, Paused, Completed)

Table with scrollable body and sticky headers

+ Add Row adds dummy data with console logging

Export downloads current rows as .csv

Responsive UI with Tailwind

Status badges and progress bars

⚖️ Trade-offs
Styling is inspired by the Figma but not pixel-perfect

No real data backend — data is static and managed via state

Sorting and column resizing not implemented (optional stretch goals)
