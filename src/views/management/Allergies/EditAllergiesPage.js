import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";
import NotFoundMessege from "../NotFoundMessege";
import Loading from "../Loading";
import Error from "../Error";
import {
  useGetAllergiesQuery,
  useUpdateAllergieMutation,
} from "../../../app/api/allergiesApiSlice";

function EditAllergiesPage() {
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: data, isSuccess, isLoading, isError } = useGetAllergiesQuery();

  let selectedallergieToUpdate;
  if (isSuccess) {
    const dataArr = data.data.slice();
    selectedallergieToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedallergieToUpdate) {
      setNameEn(selectedallergieToUpdate.name_en);
      setNameAr(selectedallergieToUpdate.name_ar);
    }
  }, [isSuccess, selectedallergieToUpdate]);
  const [updateAllergie] = useUpdateAllergieMutation();

  const isFormValid = Boolean(nameAr);

  const handleNameEnChange = (e) => {
    setNameEn(e.target.value);
  };

  const handleNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  const handleUpdateSD = () => {
    let updatedAllergie = {
      id,
      name_en: nameEn,
      name_ar: nameAr,
    };
    toast.promise(updateAllergie(updatedAllergie).unwrap(), {
      pending: "Pending ...",
      success: {
        render({ data }) {
          console.log(data);
          navigate("/management/allergies");
          return `${data.message}`;
        },
      },
      error: {
        render({ data }) {
          console.log(data);
          return `${data.data.message}`;
        },
      },
    });
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!selectedallergieToUpdate) {
    content = <NotFoundMessege />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess && selectedallergieToUpdate) {
    content = (
      <div>
        <CForm onSubmit={(e) => e.preventDefault()}>
          <CRow>
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
              <CFormInput
                type="text"
                value={nameEn}
                onChange={handleNameEnChange}
              />
            </CCol>
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
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
                onClick={handleUpdateSD}
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
  return content;
}

export default EditAllergiesPage;
