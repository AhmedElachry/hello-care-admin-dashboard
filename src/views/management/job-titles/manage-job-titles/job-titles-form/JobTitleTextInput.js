import { CFormInput, CFormLabel, CCol } from "@coreui/react";
function JobTitleTextInput({ label, value, onChange }) {
  return (
    <CCol xs="12" sm="4">
      <CFormLabel style={{ fontSize: "1.4rem" }}>{label}:</CFormLabel>
      <CFormInput type="text" value={value} onChange={onChange} />
    </CCol>
  );
}

export default JobTitleTextInput;
