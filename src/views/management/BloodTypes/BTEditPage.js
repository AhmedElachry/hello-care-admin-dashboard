import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
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
  useGetBloodTypesQuery,
  useUpdateBloodTypeMutation,
} from "../../../app/api/bloodTypesApiSlice";

function BTEditPage() {
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: bTypes,
    isSuccess,
    isLoading,
    isError,
  } = useGetBloodTypesQuery();

  let selectedBTToUpdate;
  if (isSuccess) {
    const dataArr = bTypes.data.slice();
    selectedBTToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedBTToUpdate) {
      setNameEn(selectedBTToUpdate.name_en);
      setNameAr(selectedBTToUpdate.name_ar);
    }
  }, [isSuccess, selectedBTToUpdate]);
  const [updateBT] = useUpdateBloodTypeMutation();

  const isFormValid = [nameEn, nameAr].every(Boolean);

  const handleNameEnChange = (e) => {
    setNameEn(e.target.value);
  };

  const handleNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  let updatedBT = {
    id,
    name_en: nameEn,
    name_ar: nameAr,
  };
  const handleUpdateSD = () => {
    toast.promise(updateBT(updatedBT).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        navigate("/management/blood-types");
        return `${data.message}`;
      },
      error: (error) => {
        return `${error.data.message}`;
      },
    });
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!selectedBTToUpdate) {
    content = <NotFoundMessege />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess && selectedBTToUpdate) {
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

export default BTEditPage;
