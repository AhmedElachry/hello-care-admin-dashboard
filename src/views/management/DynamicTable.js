import { CTable, CTableCaption } from "@coreui/react";
import TableActions from "./job-titles/manage-job-titles/job-titles-table/TableActions";

function DynamicTable({ tableData, tableCaption, mutable }) {
  // Extract unique keys from the data
  const allKeys = tableData.reduce((keys, item) => {
    Object.keys(item).forEach((key) => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
    return keys;
  }, []);

  // Generate dynamic columns based on the keys

  const columns = allKeys
    .filter((key) => key !== "id")
    .map((key) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " "),
      _props: { scope: "col" },
    }));
  if (mutable) {
    columns.push({
      key: "actions",
      label: "Actions",
      _props: { scope: "col" },
    });
  }

  const tableItems = tableData.map((item) => {
    const tableItem = {};
    columns.forEach((column) => {
      tableItem[column.key] = item[column.key];
      if (mutable) {
        tableItem.actions = <TableActions itemId={item.id} />;
      }
    });
    return tableItem;
  });
  console.log("table items", tableItems);
  console.log("table data", tableData);
  console.log("columns", columns);
  return (
    <CTable
      bordered
      columns={columns}
      items={tableItems}
      caption="top"
      tableHeadProps={{ color: "dark" }}
    >
      <CTableCaption>{tableCaption}</CTableCaption>
    </CTable>
  );
}

export default DynamicTable;
