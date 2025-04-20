"use client";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

type Transaction = {
  date: string;
  category: string | null;
  payee: string;
  amount: number;
  notes: string | null;
  account: string;
};

interface ExportToExcelButtonProps {
  data: Transaction[];
}

export const ExportToExcelButton = ({ data }: ExportToExcelButtonProps) => {
  const handleExport = () => {
    const filteredData = data.map(({ date, category, payee, amount, notes, account }) => ({
      Date: date,
      Category: category ?? "",
      Payee: payee,
      Amount: amount,
      Notes: notes ?? "",
      Account: account,
    }));

    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "transactions.xlsx");
  };

  return (
    <Button
      onClick={handleExport}
      variant="outline"
      className="w-full lg:w-auto bg-green-500 text-white hover:bg-green-600 border-none"
    >
      <FileDown className="size-4 mr-2" />
      Export to Excel
    </Button>
  );
};
