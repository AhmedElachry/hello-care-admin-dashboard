import React, { useState } from "react";
import DynamicForm from "../DynamicForm";
import DynamicTable from "../DynamicTable";
import {
  useGetScientificTitlesQuery,
  useAddScientificTitleMutation,
  useUpdateScientificTitleMutation,
  useDeleteScientificTitleMutation,
} from "../../../app/api/scientificTitleApiSlice";
// import { useGetScientificTitlesQuery } from "../../../app/api/ScientificTitleApiSlice";

function ScientificTitle() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { data: data, isSuccess } = useGetScientificTitlesQuery();
  const formFields = [{ label: "Name", name: "name", type: "text" }];

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // addScientificDegree(formData);
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
      <DynamicTable tableData={tableData} />
    </div>
  );
}

export default ScientificTitle;
