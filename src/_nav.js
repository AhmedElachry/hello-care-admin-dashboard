import React from "react";
import CIcon from "@coreui/icons-react";
import { cilPencil, cilSpeedometer, cilContact } from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Management",
  },
  {
    component: CNavItem,
    name: "Employees",
    to: "/management/employees",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Manage Job Titles",
    to: "/management/manage-job-titles",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Scientific Degree",
    to: "/management/scientific-degree",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
];

export default _nav;
