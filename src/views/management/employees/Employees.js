import { CTable } from "@coreui/react";

const Employees = () => {
  const columns = [
    {
      key: "id",
      label: "#",
      _props: { scope: "col" },
    },
    {
      key: "name",
      _props: { scope: "col" },
    },
    {
      key: "title",
      label: "Job Title",
      _props: { scope: "col" },
    },
    {
      key: "heading_2",
      label: "Languages Knowlege",
      _props: { scope: "col" },
    },
  ];
  const items = [
    {
      id: 1,
      name: "Eman",
      title: "HR",
      heading_2: "English",
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 2,
      name: "Mohamed Adel",
      title: "Front-End Dev",
      heading_2: "Javascript",
      _cellProps: { id: { scope: "row" } },
    },
    {
      id: 3,
      name: "Hazem",
      title: ".Net Dev",
      heading_2: "C#",
      _cellProps: { id: { scope: "row" } },
    },
  ];
  return <CTable columns={columns} items={items} />;
};

export default Employees;
