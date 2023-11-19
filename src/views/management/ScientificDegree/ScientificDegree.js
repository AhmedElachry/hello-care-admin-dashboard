import React from "react";
// import DynamicForm from "../DynamicForm";
import { useState } from "react";
import { CButton, CCollapse } from "@coreui/react";
import {
  useGetScientificDegreesQuery,
  useDeleteScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";
import DynamicTable from "../DynamicTable";
import SDForm from "./AddSDForm";
import Loading from "../Loading";
import Error from "../Error";

function ScientificDegree() {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const [
    deleteScientificDegree,
    { isSuccess: isDelSuccess, isError: isDelError, isLoading: isDelLoading },
  ] = useDeleteScientificDegreeMutation();
  const {
    data: data,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificDegreesQuery();

  let tableData = [];
  let content;

  if (isSuccess) {
    tableData = data.data.slice();
    console.log(tableData);
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
          <SDForm />
        </CCollapse>

        <DynamicTable
          tableData={tableData}
          mutable={true}
          editRoute={"edit-scientific-degree"}
          deleteItemHook={deleteScientificDegree}
          tableCaption={"ScientificDegree"}
        />
      </div>
    );
  } else if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  }
  return <>{content}</>;
}

export default ScientificDegree;
