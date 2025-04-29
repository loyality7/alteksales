import { useState, useEffect } from "react";
import { TProduct } from "../constants/productDataR";

export type SheetRow = {
  [key: string]: string;
};

const useSheets = (sheetData: SheetRow[]) => {
  // Define the type for the sheet data (array of arrays of strings)

  console.log(sheetData, "sheetData");

  const [jsonData, setJsonData] = useState<TProduct[]>([]);

  useEffect(() => {
    if (sheetData && sheetData.length > 0) {
      const headers = sheetData[0]; // Extract headers (first row)

      const convertedData = sheetData.slice(1).map((row) => {
        let obj: { [key: string]: string } = {};
        for (const key in row) {
          console.log(key, row[key]);
          obj[headers[key]] = row[key];
        }
        return obj;
      }) as unknown as TProduct[];

      setJsonData(convertedData); // Set the converted JSON data
    }
  }, [sheetData]); // Re-run when sheetData changes

  console.log(jsonData, "jsonData converted");

  return jsonData;
};

export default useSheets;
