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
  useGetRejectReasonsQuery,
  useUpdateRejectReasonMutation,
} from "../../../app/api/rejectReasonsApiSlice";

function EditRRPage() {
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: rReasons,
    isSuccess,
    isLoading,
    isError,
  } = useGetRejectReasonsQuery();

  let selectedRRToUpdate;
  if (isSuccess) {
    const dataArr = rReasons.data.slice();
    selectedRRToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedRRToUpdate) {
      setNameEn(selectedRRToUpdate.name_en);
      setNameAr(selectedRRToUpdate.name_ar);
    }
  }, [isSuccess, selectedRRToUpdate]);
  const [updateRR] = useUpdateRejectReasonMutation();

  const isFormValid = [nameEn, nameAr].every(Boolean);

  const handleNameEnChange = (e) => {
    setNameEn(e.target.value);
  };

  const handleNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  let updatedRR = {
    id,
    name_en: nameEn,
    name_ar: nameAr,
  };
  const handleUpdateSD = () => {
    toast.promise(updateRR(updatedRR).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        navigate("/management/reject-reasons");
        return `${data.message}`;
      },
      error: (error) => {
        return `${error.data.message}`;
      },
    });
  };

  let content;

  if (!selectedRRToUpdate) {
    content = <NotFoundMessege />;
  } else if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess && selectedRRToUpdate) {
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

export default EditRRPage;
