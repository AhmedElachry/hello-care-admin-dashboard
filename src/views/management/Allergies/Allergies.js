import { useState } from "react";
import DynamicTable from "../DynamicTable";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
  CCollapse,
} from "@coreui/react";
// import { toast } from "react-toastify";
import toast from "react-hot-toast";

import Loading from "../Loading";
import Error from "../Error";
import {
  useAddAllergieMutation,
  useDeleteAllergieMutation,
  useGetAllergiesQuery,
} from "../../../app/api/allergiesApiSlice";
function allergies() {
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [visible, setVisible] = useState(false);
  const { data: data, isSuccess, isError, isLoading } = useGetAllergiesQuery();
  const [deleteAllergie] = useDeleteAllergieMutation();
  const [addAllergie] = useAddAllergieMutation();

  const handleNameEnChange = (e) => {
    setNameEn(e.target.value);
  };
  const handleNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  const handleSubmit = (e) => {
    let newAllergie = { name_en: nameEn, name_ar: nameAr };
    e.preventDefault();
    toast.promise(addAllergie(newAllergie).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        setVisible(!visible);
        setNameAr("");
        setNameEn("");
        return `${data.message}`;
      },

      error: (error) => {
        return `${error.data.message}`;
      },
    });
  };
  const isFormValid = Boolean(nameEn && nameAr);

  let tableData = [];
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess) {
    tableData = data.data.slice();

    content = (
      <div>
        <CButton
          color="success"
          style={{ color: "white" }}
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setVisible(!visible);
          }}
        >
          Add New
        </CButton>
        <CCollapse visible={visible}>
          <CForm onSubmit={(e) => e.preventDefault()}>
            <CRow>
              <CCol xs="12" sm="4">
                <CFormLabel style={{ fontSize: "1.4rem" }}>Name EN:</CFormLabel>
                <CFormInput
                  type="text"
                  value={nameEn}
                  onChange={handleNameEnChange}
                />
              </CCol>
              <CCol xs="12" sm="4">
                <CFormLabel style={{ fontSize: "1.4rem" }}>Name AR:</CFormLabel>
                <CFormInput
                  type="text"
                  value={nameAr}
                  onChange={handleNameArChange}
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
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                >
                  Done
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCollapse>
        <DynamicTable
          tableData={tableData}
          mutable={true}
          removable={true}
          deleteItemHook={deleteAllergie}
          editRoute={"edit-allergie"}
          tableCaption={"Allergies"}
        />
      </div>
    );
  } else if (isError) {
    content = <Error />;
  }
  return content;
}

export default allergies;
