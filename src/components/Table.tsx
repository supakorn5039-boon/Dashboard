import { ColumnType } from "@/types/ColumnType";
import React from "react";
type Props = {
  column: ColumnType[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
};

export default function Table({ column, renderRow, data }: Props) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {column.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
}
