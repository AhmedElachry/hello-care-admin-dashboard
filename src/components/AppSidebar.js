import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CImage,
} from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";
import { setSidebarUnfoldable } from "../features/sidebarSlice/sidebarSlice";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";
const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebar.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
  return (
    <CSidebar position="fixed" unfoldable={unfoldable} visible={sidebarShow}>
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CImage
          className="sidebar-brand-full"
          src="https://appssquare.com/_next/static/media/appssquare-logo.cba430ba.svg"
          height={50}
        />
        <CImage
          className="sidebar-brand-narrow"
          src="https://appssquare.com/_next/static/media/appssquare-logo.cba430ba.svg"
          height={50}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(setSidebarUnfoldable(!unfoldable))}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
