// import React from "react";
// import {
//   CForm,
//   CFormInput,
//   CFormLabel,
//   CFormSelect,
//   CRow,
//   CCol,
//   CButton,
// } from "@coreui/react";

// function JobTitleForm({
//   name,
//   nameEn,
//   nameAr,
//   departmentId,
//   departmentName,
//   isFormValid,
//   handleNameChange,
//   handleNameEnChange,
//   handleNameArChange,
//   handleDepartmentIdChange,
//   handleDepartmentNameChange,
//   handleUpdateJobTitle,
// }) {
//   return (
//     <CForm onSubmit={(e) => e.preventDefault()}>
//       <CRow>
//         <CCol xs="12" sm="4">
//           <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
//           <CFormInput type="text" value={name} onChange={handleNameChange} />
//         </CCol>
//         <CCol xs="12" sm="4">
//           <CFormLabel style={{ fontSize: "1.4rem" }}>Name (EN):</CFormLabel>
//           <CFormInput
//             type="text"
//             value={nameEn}
//             onChange={handleNameEnChange}
//           />
//         </CCol>
//         <CCol xs="12" sm="4">
//           <CFormLabel style={{ fontSize: "1.4rem" }}>Name (AR):</CFormLabel>
//           <CFormInput
//             type="text"
//             value={nameAr}
//             onChange={handleNameArChange}
//           />
//         </CCol>
//         <CCol xs="12" sm="4">
//           <CFormLabel style={{ fontSize: "1.4rem" }}>Depart ID:</CFormLabel>
//           <CFormSelect
//             size="sm"
//             value={departmentId}
//             onChange={handleDepartmentIdChange}
//           >
//             <option value="0"></option>
//             <option value="1">المبيعات</option>
//             <option value="2">الاستيراد</option>
//             <option value="4">المخازن</option>
//           </CFormSelect>
//         </CCol>
//         <CCol xs="12" sm="4">
//           <CFormLabel style={{ fontSize: "1.4rem" }}>Depart Name:</CFormLabel>
//           <CFormInput
//             type="text"
//             value={departmentName}
//             onChange={handleDepartmentNameChange}
//           />
//         </CCol>
//         <CCol xs="12" sm="4" className="d-grid">
//           <CButton
//             style={{
//               color: "white",
//               lineHeight: "100%",
//             }}
//             color="success"
//             className=" align-self-end mt-md-4 mt-4"
//             size="lg"
//             onClick={handleUpdateJobTitle}
//             disabled={!isFormValid}
//           >
//             Edit Done
//           </CButton>
//         </CCol>
//       </CRow>
//     </CForm>
//   );
// }

// export default JobTitleForm;
