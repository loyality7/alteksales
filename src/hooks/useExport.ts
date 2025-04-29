import * as XLSX from "xlsx";

export const useExportToExcel = () => {
  const exportToExcel = (data: any[], fileName = "data.xlsx") => {
    if (!Array.isArray(data) || data.length === 0) {
      console.error("Invalid data format. Ensure it's a non-empty array.");
      return;
    }

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, fileName);
  };

  return { exportToExcel };
};
