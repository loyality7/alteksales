// src/components/ExcelFromPublic.tsx
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

interface JsonData {
  [key: string]: string | number; // Adjust based on your data structure
}

const useExcelReader = () => {
  const [jsonData, setJsonData] = useState<JsonData[] | null>(null);

  // src/utils/exportToExcel.ts
  // const exportToExcel = (data: any[], fileName: string): void => {
  //   // Convert the data to a worksheet
  //   const worksheet = XLSX.utils.json_to_sheet(data);

  //   // Create a new workbook and append the worksheet
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

  //   // Generate a buffer
  //   const excelBuffer = XLSX.write(workbook, {
  //     bookType: "xlsx",
  //     type: "array",
  //   });

  //   // Save the file
  //   const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  //   saveAs(blob, `${fileName}.xlsx`);
  // };

  // exportToExcel(modifiedProduct, "products");

  useEffect(() => {
    const fetchExcelFile = async () => {
      try {
        // Fetch the Excel file from the public folder
        const response = await fetch("/data.xlsx");
        if (!response.ok) {
          throw new Error("Failed to fetch the Excel file.");
        }
        const blob = await response.blob();

        // Read the file as an ArrayBuffer
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const arrayBuffer = event.target?.result as ArrayBuffer;

          // Use XLSX to parse the ArrayBuffer
          const workbook = XLSX.read(arrayBuffer, { type: "array" });

          // Assuming the first sheet is the one we need
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          // Convert sheet to JSON
          const data: JsonData[] = XLSX.utils.sheet_to_json(sheet);
          setJsonData(data);
        };
        reader.readAsArrayBuffer(blob);
      } catch (error) {
        console.error("Error fetching or reading the Excel file:", error);
      }
    };

    fetchExcelFile();
  }, []);

  return jsonData;
};

export default useExcelReader;
