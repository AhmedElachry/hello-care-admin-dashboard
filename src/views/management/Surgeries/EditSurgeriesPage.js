import { useState, useEffect } from "react";
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
  useGetSurgeriesQuery,
  useUpdateSurgeryMutation,
} from "../../../app/api/surgeriesApiSlice";
function EditSurgeriesPage() {
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: data, isSuccess, isLoading, isError } = useGetSurgeriesQuery();

  let selectedSurgeryToUpdate;
  if (isSuccess) {
    const dataArr = data.data.slice();
    selectedSurgeryToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedSurgeryToUpdate) {
      setNameEn(selectedSurgeryToUpdate.name_en);
      setNameAr(selectedSurgeryToUpdate.name_ar);
    }
  }, [isSuccess, selectedSurgeryToUpdate]);
  const [updateSurgery] = useUpdateSurgeryMutation();

  const isFormValid = Boolean(nameAr);

  const handleNameEnChange = (e) => {
    setNameEn(e.target.value);
  };

  const handleNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  const handleUpdateSD = () => {
    let updatedSurgery = {
      id,
      name_en: nameEn,
      name_ar: nameAr,
    };
    toast.promise(updateSurgery(updatedSurgery).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        navigate("/management/surgeries");
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
  } else if (!selectedSurgeryToUpdate) {
    content = <NotFoundMessege />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess && selectedSurgeryToUpdate) {
    content = (
      <div>
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

export default EditSurgeriesPage;
