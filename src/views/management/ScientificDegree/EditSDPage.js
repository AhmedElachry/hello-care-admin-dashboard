import React, { useState } from "react";
import {
  useGetScientificDegreesQuery,
  useUpdateScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";
import { useNavigate, useParams } from "react-router-dom";
// import { useUpdateScientificDegreeMutation } from "../../../app/api/ScientificDegreeApiSlice";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";

function EditSDPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: jobTitles,
    isLoading,
    isSuccess,
    isError,
  } = useGetScientificDegreesQuery();
  const [updateSD] = useUpdateScientificDegreeMutation();

  const isFormValid = [name].every(Boolean);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const updatedSD = {
    id,
    name,
  };
  const handleUpdateJobTitle = () => {
    updateSD(updatedSD);
  };

  return (
    <div>
      <CForm onSubmit={(e) => e.preventDefault()}>
        <CRow>
          <CCol xs="12" sm="4">
            <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
            <CFormInput type="text" value={name} onChange={handleNameChange} />
          </CCol>
          <CCol xs="12" sm="4" className="d-grid">
            <CButton
              style={{
                color: "white",
                lineHeight: "100%",
              }}
              color="success"
              className=" align-self-end mt-md-4 mt-4"
              size="lg"
              onClick={handleUpdateJobTitle}
              disabled={!isFormValid}
            >
              Edit Done
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </div>
  );
}

export default EditSDPage;
