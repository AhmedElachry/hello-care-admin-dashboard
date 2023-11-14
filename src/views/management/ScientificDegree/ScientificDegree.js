import React from "react";
import DynamicForm from "../DynamicForm";
import { useState } from "react";
import {
  useAddScientificDegreeMutation,
  useGetScientificDegreesQuery,
} from "../../../app/api/ScientificDegreeApiSlice";
import DynamicTable from "../DynamicTable";

function ScientificDegree() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [addScientificDegree] = useAddScientificDegreeMutation();
  const { data: data, isSuccess } = useGetScientificDegreesQuery();

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
  // let columns = [];

  if (isSuccess) {
    // console.log(data.data);
    tableData = data.data.slice();
  }

  return (
    <div>
      <DynamicForm
        formFields={formFields}
        formData={formData}
        handleFieldChange={handleFieldChange}
        // isFormValid={formData}
        handleSubmit={handleSubmit}
      />
      <DynamicTable tableData={tableData} mutable={true} />
    </div>
  );
}

export default ScientificDegree;
