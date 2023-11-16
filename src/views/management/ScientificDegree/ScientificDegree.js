import React from "react";
import DynamicForm from "../DynamicForm";
import { useState } from "react";
import {
  useGetScientificDegreesQuery,
  useDeleteScientificDegreeMutation,
  useAddScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";
import DynamicTable from "../DynamicTable";
import SDForm from "./SDForm";
import Loading from "../Loading";
import Error from "../Error";

function ScientificDegree() {
  // const [formData, setFormData] = useState({
  //   name: "",
  // });
  const [addScientificDegree] = useAddScientificDegreeMutation();
  const [deleteScientificDegree] = useDeleteScientificDegreeMutation();
  const {
    data: data,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificDegreesQuery();

  // const handleFieldChange = (fieldName, value) => {
  //   setFormData({
  //     ...formData,
  //     [fieldName]: value,
  //   });
  // };

  // const formFields = [{ label: "Name", name: "name", type: "text" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    addScientificDegree(formData);
    console.log(formData);
  };
  let tableData = [];
  let content;

  if (isSuccess) {
    tableData = data.data.slice();
    content = (
      <div>
        <SDForm handleSubmit={handleSubmit} />
        <DynamicTable
          tableData={tableData}
          mutable={true}
          editRoute={"edit-scientific-degree"}
          deleteItemHook={deleteScientificDegree}
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
