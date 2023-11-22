import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilPencil,
  cilSpeedometer,
  cilContact,
  cilBarChart,
  cilAvTimer,
  cilDrop,
  cilEducation,
  cilSend,
  cilSettings,
  cilHospital,
  cilWallet,
  cilTruck,
  cilFilterX,
  cilCarAlt,
} from "@coreui/icons";
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
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Scientific Degrees",
    to: "/management/scientific-degrees",
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilAvTimer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Orders",
    to: "/management/orders",
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Settings",
    to: "/management/settings",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Contact Us",
    to: "/management/contact-us",
    icon: <CIcon icon={cilSend} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Statistics",
    to: "/management/statistics",
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Reject Reasons",
    to: "/management/reject-reasons",
    icon: <CIcon icon={cilFilterX} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Blood Types",
    to: "/management/blood-types",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
];

export default _nav;
