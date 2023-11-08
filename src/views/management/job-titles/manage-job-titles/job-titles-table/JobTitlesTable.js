import { CTable, CTableCaption } from "@coreui/react";
import columns from "./tableColumns";
import TableActions from "./TableActions";

function JobTitleTable({ jobTitlesData }) {
  const jobTitlesTableItems = jobTitlesData.map((jobTitle) => ({
    id: jobTitle.id,
    name: jobTitle.name,
    name_En: jobTitle.name_en,
    name_Ar: jobTitle.name_ar,
    depart_Id: jobTitle.department_id,
    depart_Name: jobTitle.department_name,
    actions: <TableActions jobTitle={jobTitle} />,
  }));
  return (
    <CTable
      bordered
      columns={columns}
      items={jobTitlesTableItems}
      caption="top"
      tableHeadProps={{ color: "dark" }}
    >
      <CTableCaption>List of Avialable Job Titles</CTableCaption>
    </CTable>
  );
}

export default JobTitleTable;
