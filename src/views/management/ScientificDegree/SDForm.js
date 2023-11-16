import { useState } from "react";

import { useGetScientificDegreesQuery } from "../../../app/api/ScientificDegreeApiSlice";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";
import Loading from "../Loading";

function SDForm({ handleSubmit }) {
  const [name, setName] = useState("");
  const {
    data: data,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificDegreesQuery();

  const handleFieldChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  let tableData = [];

  if (isSuccess) {
    tableData = data.data.slice();
  }

  const isFormValid = Boolean(name);

  let content;
  if (isLoading) {
    content = <Loading />;
  }

  return (
    <div>
      <CForm onSubmit={(e) => e.preventDefault()}>
        <CRow>
          <CCol xs="12" sm="4">
            <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
            <CFormInput
              type="text"
              value={name}
              name="name"
              onChange={handleFieldChange}
            />
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
              onClick={() => handleSubmit(name)}
              disabled={!isFormValid}
            >
              Done
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </div>
  );
}

export default SDForm;
