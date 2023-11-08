import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Employees = React.lazy(() =>
  import("./views/management/employees/Employees")
);
const ManageJobTitles = React.lazy(() =>
  import("./views/management/job-titles/manage-job-titles/ManageJobTitlesPage")
);

const EditJobTitlePage = React.lazy(() =>
  import(
    "./views/management/job-titles/manage-job-titles/edit-job-titles/EditJobTitlePage"
  )
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  {
    path: "/management",
    name: "Management",
    element: ManageJobTitles,
    exact: true,
  },
  { path: "/management/employees", name: "Employees", element: Employees },
  {
    path: "/management/manage-job-titles",
    name: "Manage Job Titles",
    element: ManageJobTitles,
  },
  {
    path: "/management/edit-job-title",
    name: "Edit Job Title Form",
    element: EditJobTitlePage,
  },
  {
    path: "/management/edit-job-title/:jobTitleId",
    name: "Edit Job Title Form",
    element: EditJobTitlePage,
  },
];

export default routes;
