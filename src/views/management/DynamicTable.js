import { CTable, CTableCaption } from "@coreui/react";
// import columns from "./tableColumns";
// import TableActions from "./TableActions";

function DynamicTable({ tableData, tableCaption }) {
  const tableItems = tableData.map((item) => ({
    id: item.id,
    name: item.name,
    actions: <TableActions itemId={itemId} />,
  }));
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
