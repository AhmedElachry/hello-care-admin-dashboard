import React from "react";
import DynamicForm from "../DynamicForm";
import { useState } from "react";
import { useAddScientificDegreeMutation } from "../../../app/api/ScientificDegreeApiSlice";

function ScientificDegree() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [addScientificDegree] = useAddScientificDegreeMutation();

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const formFields = [{ label: "Name", name: "name", type: "text" }];

  const isFormValid = Object.values(formData).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the formData object and submit it or perform any other actions
    addScientificDegree(formData);
    console.log(formData);
  };

  return (
    <div>
      <DynamicForm
        formFields={formFields}
        formData={formData}
        handleFieldChange={handleFieldChange}
        isFormValid={isFormValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ScientificDegree;
