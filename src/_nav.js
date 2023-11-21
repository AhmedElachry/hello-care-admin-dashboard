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
    name: "Visits",
    to: "/management/visits",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Scientific Degrees",
    to: "/management/scientific-degrees",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Scientific Title",
    to: "/management/scientific-title",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Timeouts",
    to: "/management/timeouts",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Orders",
    to: "/management/orders",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/management/settings",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Contact Us",
    to: "/management/contact-us",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Statistics",
    to: "/management/statistics",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
];

export default _nav;
