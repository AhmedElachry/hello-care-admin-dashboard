import React from "react";
import { useState } from "react";
import { CButton, CCollapse } from "@coreui/react";
import {
  useGetScientificDegreesQuery,
  useDeleteScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";
import DynamicTable from "../DynamicTable";
import AddSDForm from "./AddSDForm";
import Loading from "../Loading";
import Error from "../Error";

function ScientificDegree() {
  const [visible, setVisible] = useState(false);

  const [
    deleteScientificDegree,
    // { isSuccess: isDelSuccess, isError: isDelError, isLoading: isDelLoading },
  ] = useDeleteScientificDegreeMutation();
  const {
    data: data,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificDegreesQuery();

  let tableData = [];
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    tableData = data.data.slice();
    content = (
      <div>
        <CButton
          color="success"
          style={{ color: "white" }}
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setVisible(!visible);
          }}
        >
          Add New
        </CButton>
        <CCollapse visible={visible}>
          <AddSDForm />
        </CCollapse>

        <DynamicTable
          tableData={tableData}
          mutable={true}
          editRoute={"edit-scientific-degree"}
          deleteItemHook={deleteScientificDegree}
          tableCaption={"ScientificDegree"}
          removable={true}
        />
      </div>
    );
  } else if (isError) {
    content = <Error />;
  }
  return content;
}

export default ScientificDegree;
