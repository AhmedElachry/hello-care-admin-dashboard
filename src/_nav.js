import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilPencil,
  cilSpeedometer,
  cilContact,
  cilBarChart,
  cilAlarm,
  cilDrop,
  cilEducation,
  cilSend,
  cilSettings,
  cilHospital,
  cilWallet,
  cilTruck,
  cilBan,
  cilCarAlt,
  cilBug,
  cilBadge,
  cilAnimal,
  cilTags,
  cilMedicalCross,
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
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilBadge} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Timeouts",
    to: "/management/timeouts",
    icon: <CIcon icon={cilAlarm} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Orders",
    to: "/management/orders",
    icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilBan} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Blood Types",
    to: "/management/blood-types",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Diseases",
    to: "/management/diseases",
    icon: <CIcon icon={cilBug} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Allergies",
    to: "/management/allergies",
    icon: <CIcon icon={cilAnimal} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Surgeries",
    to: "/management/Surgeries",
    icon: <CIcon icon={cilMedicalCross} customClassName="nav-icon" />,
  },
];

export default _nav;
