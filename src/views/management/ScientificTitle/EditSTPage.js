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
  useGetScientificTitlesQuery,
  useUpdateScientificTitleMutation,
} from "../../../app/api/scientificTitleApiSlice";

function EditSDPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: STitles,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificTitlesQuery();
  const [updateST] = useUpdateScientificTitleMutation();

  let selectedSTToUpdate;
  if (isSuccess) {
    const dataArr = STitles.data.slice();
    selectedSTToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedSTToUpdate) {
      setName(selectedSTToUpdate.name);
    }
  }, [isSuccess, selectedSTToUpdate]);

  const isFormValid = [name].every(Boolean);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  let updatedST = {
    id,
    name,
  };
  const handleUpdateST = () => {
    updateST(updatedST)
      .unwrap()
      .then((payload) => {
        console.log(payload);
        toast.success(payload.message, {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/management/scientific-title");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  let content;

  if (!selectedSTToUpdate) {
    content = <NotFoundMessege />;
  } else if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess && selectedSTToUpdate) {
    content = (
      <div>
        <CForm onSubmit={(e) => e.preventDefault()}>
          <CRow>
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
              <CFormInput
                type="text"
                value={name}
                onChange={handleNameChange}
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
                onClick={handleUpdateST}
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

export default EditSDPage;
