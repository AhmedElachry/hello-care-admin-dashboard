import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const ScientificDegree = React.lazy(() =>
  import("./views/management/ScientificDegree/ScientificDegree")
);
const EditSDPage = React.lazy(() =>
  import("./views/management/ScientificDegree/EditSDPage")
);
const ScientificTitle = React.lazy(() =>
  import("./views/management/ScientificTitle/ScientificTitle")
);
const EditSTPage = React.lazy(() =>
  import("./views/management/ScientificTitle/EditSTPage")
);

const Visits = React.lazy(() => import("./views/management/visits/Visits"));

const EditVisitsPage = React.lazy(() =>
  import("./views/management/visits/EditVisitPage")
);

const Timeout = React.lazy(() => import("./views/management/Timeout/Timeout"));
const EditTimeout = React.lazy(() =>
  import("./views/management/Timeout/EditTimeout")
);
const Orders = React.lazy(() => import("./views/management/Orders/Orders"));

const Settings = React.lazy(() =>
  import("./views/management/Settings/settings")
);

const ContactUs = React.lazy(() =>
  import("./views/management/ContactUs/ContactUs")
);

const Statistics = React.lazy(() =>
  import("./views/management/Statistics/Statistics")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
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
    path: "/management/edit-scientific-title",
    name: "edit Scientific Title",
    element: EditSTPage,
  },
  {
    path: "/management/edit-scientific-title/:id",
    name: "Scientific Title",
    element: EditSTPage,
  },
  {
    path: "/management/visits",
    name: "visits",
    element: Visits,
  },
  {
    path: "/management/edit-visit/:id",
    name: "edit Visit",
    element: EditVisitsPage,
  },
  {
    path: "/management/timeouts",
    name: "Timeouts",
    element: Timeout,
  },
  {
    path: "/management/edit-timeout/:id",
    name: "Timeouts",
    element: EditTimeout,
  },
  {
    path: "/management/orders",
    name: "Orders",
    element: Orders,
  },
  {
    path: "/management/settings",
    name: "Settings",
    element: Settings,
  },
  {
    path: "/management/contact-us",
    name: "Contact Us",
    element: ContactUs,
  },
  {
    path: "/management/statistics",
    name: "Statistics",
    element: Statistics,
  },
];

export default routes;
