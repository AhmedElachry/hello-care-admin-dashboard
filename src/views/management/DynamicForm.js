import {
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";

function DynamicForm({
  formFields,
  formData,
  handleFieldChange,
  handleSubmit,
}) {
  const isFormValid = Object.values(formData).every(Boolean);

  return (
    <CForm onSubmit={handleSubmit}>
      <CRow>
        {formFields.map((field, index) => (
          <CCol key={index} xs="12" sm="4">
            <CFormLabel style={{ fontSize: "1.4rem" }}>
              {field.label}:
            </CFormLabel>
            {field.type === "select" ? (
              <CFormSelect
                size="sm"
                value={formData[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
              >
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </CFormSelect>
            ) : (
              <CFormInput
                type={field.type}
                value={formData[field.name]}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
              />
            )}
          </CCol>
        ))}
        <CCol xs="12" sm="4" className="d-grid">
          <CButton
            style={{
              color: "white",
              lineHeight: "100%",
            }}
            color="success"
            className="align-self-end mt-md-4 mt-4"
            size="lg"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Edit Done
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  );
}

export default DynamicForm;
