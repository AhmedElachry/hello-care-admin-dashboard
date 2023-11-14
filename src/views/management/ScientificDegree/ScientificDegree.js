import React from "react";
import DynamicForm from "../DynamicForm";
import { useState } from "react";
import {
  useAddScientificDegreeMutation,
  useGetScientificDegreesQuery,
  useDeleteScientificDegreeMutation,
  useUpdateScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";
import DynamicTable from "../DynamicTable";

function ScientificDegree() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [addScientificDegree] = useAddScientificDegreeMutation();
  const { data: data, isSuccess } = useGetScientificDegreesQuery();
  const [deleteScientificDegree] = useDeleteScientificDegreeMutation();
  const [UpdateScientificDegree] = useUpdateScientificDegreeMutation();

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const formFields = [{ label: "Name", name: "name", type: "text" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    addScientificDegree(formData);
    console.log(formData);
  };
  let tableData = [];

  if (isSuccess) {
    tableData = data.data.slice();
  }

  return (
    <div>
      <DynamicForm
        formFields={formFields}
        formData={formData}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
      />
      <DynamicTable
        tableData={tableData}
        mutable={true}
        route={"edit-scientific-degree"}
        deleteItemHook={deleteScientificDegree}
        editItemHook={UpdateScientificDegree}
      />
    </div>
  );
}

export default ScientificDegree;
