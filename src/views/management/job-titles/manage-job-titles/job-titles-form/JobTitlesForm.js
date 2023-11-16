import {
  CForm,
  CFormLabel,
  CButton,
  CRow,
  CCol,
  CContainer,
  CHeader,
  CFormSelect,
} from "@coreui/react";
import { useAddJobTitleMutation } from "../../../../../app/api/dataApiSlice";
import { useState } from "react";
import JobTitleTextInput from "./JobTitleTextInput";

function JobTitlesForm() {
  // hooks
  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [departmentId, setDepartmentId] = useState(0);
  const [departmentName, setDepartmentName] = useState("");

  const [addJobTitle] = useAddJobTitleMutation();
  // handlers
  const isValidForm = [
    name,
    nameEn,
    nameAr,
    departmentId,
    departmentName,
  ].every(Boolean);

  const onAddJobTitle = () => {
    if (isValidForm) {
      const newJobTitle = {
        name,
        name_en: nameEn,
        name_ar: nameAr,
        department_id: departmentId,
        department_name: departmentName,
      };
      addJobTitle(newJobTitle);
      setName("");
      setNameEn("");
      setNameAr("");
      setDepartmentId(0);
      setDepartmentName("");
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onNameEnChange = (e) => {
    setNameEn(e.target.value);
  };

  const onNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  const onDepartmentIdChange = (e) => {
    setDepartmentId(parseInt(e.target.value));
  };

  const onDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  return (
    <div className="card mb-5 p-4">
      <CContainer>
        <CHeader style={{ fontSize: "2rem" }}>Add New Job Title</CHeader>
        <CForm onSubmit={(e) => e.preventDefault()}>
          <CRow>
            <JobTitleTextInput
              label="Name"
              value={name}
              onChange={onNameChange}
            />
            <JobTitleTextInput
              label="Name (EN)"
              value={nameEn}
              onChange={onNameEnChange}
            />
            <JobTitleTextInput
              label="Name (AR)"
              value={nameAr}
              onChange={onNameArChange}
            />
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Depart ID:</CFormLabel>
              <CFormSelect
                size="sm"
                value={departmentId}
                onChange={onDepartmentIdChange}
              >
                <option value="0"></option>
                <option value="1">المبيعات</option>
                <option value="2">الاستيراد</option>
                <option value="4">المخازن</option>
              </CFormSelect>
            </CCol>
            <JobTitleTextInput
              label="Depart Name"
              value={departmentName}
              onChange={onDepartmentNameChange}
            />
            <CCol xs="12" sm="4" className="d-grid">
              <CButton
                style={{
                  color: "white",
                  lineHeight: "100%",
                }}
                color="success"
                className=" align-self-end mt-md-4 mt-4"
                size="lg"
                onClick={onAddJobTitle}
                disabled={!isValidForm}
              >
                Add Job Title
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CContainer>
    </div>
  );
}
export default JobTitlesForm;
