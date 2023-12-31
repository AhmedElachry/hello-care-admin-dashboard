import { CTable, CTableCaption } from "@coreui/react";
import TableActions from "./TableActions";

function DynamicTable({
  tableData,
  tableCaption,
  mutable,
  removable,
  editRoute,
  deleteItemHook,
}) {
  const allKeys = tableData.reduce((keys, item) => {
    Object.keys(item).forEach((key) => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
    return keys;
  }, []);

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
      _props: { width: 100, scope: "col" },
    });
  }

  const tableItems = tableData.map((item) => {
    const tableItem = {};
    columns.forEach((column) => {
      tableItem[column.key] = item[column.key];
      if (mutable) {
        tableItem.actions = (
          <TableActions
            slug={item.key}
            removable={removable}
            id={item.id}
            deleteItemHook={deleteItemHook}
            editRoute={editRoute}
          />
        );
      }
    });
    return tableItem;
  });
  return (
    <>
      <CTable
        responsive={true}
        bordered
        columns={columns}
        items={tableItems}
        caption="top"
        tableHeadProps={{ color: "dark" }}
      >
        <CTableCaption>{tableCaption}</CTableCaption>
      </CTable>
    </>
  );
}

export default DynamicTable;
