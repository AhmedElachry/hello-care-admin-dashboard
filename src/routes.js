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
const ScientificDegree = React.lazy(() =>
  import("./views/management/ScientificDegree/ScientificDegree")
);
const ScientificTitle = React.lazy(() =>
  import("./views/management/ScientificTitle/ScientificTitle")
);
const EditSDPage = React.lazy(() =>
  import("./views/management/ScientificDegree/EditSDPage")
);
const Visits = React.lazy(() => import("./views/management/visits/Visits"));

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
  {
    path: "/management/scientific-degrees",
    name: "Scientific Degrees",
    element: ScientificDegree,
  },
  {
    path: "/management/edit-scientific-degree/",
    name: "edit Scientific Degree",
    element: EditSDPage,
  },
  {
    path: "/management/edit-scientific-degree/:id",
    name: "edit Scientific Degree",
    element: EditSDPage,
  },
  {
    path: "/management/scientific-title",
    name: "Scientific Title",
    element: ScientificTitle,
  },
  {
    path: "/management/visits",
    name: "visits",
    element: Visits,
  },
];

export default routes;
