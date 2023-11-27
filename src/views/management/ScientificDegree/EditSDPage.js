import React, { useState, useEffect } from "react";

import {
  useGetScientificDegreesQuery,
  useUpdateScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";

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

function EditSDPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: sDegrees,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificDegreesQuery();

  let selectedSDToUpdate;
  if (isSuccess) {
    const dataArr = sDegrees.data.slice();
    selectedSDToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedSDToUpdate) {
      setName(selectedSDToUpdate.name);
    }
  }, [isSuccess, selectedSDToUpdate]);
  const [updateSD] = useUpdateScientificDegreeMutation();

  const isFormValid = [name].every(Boolean);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  let updatedSD = {
    id,
    name,
  };
  const handleUpdateSD = () => {
    toast.promise(updateSD(updatedSD).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        navigate("/management/scientific-degrees");
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
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess && selectedSDToUpdate) {
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
  if (!selectedSDToUpdate) {
    content = <NotFoundMessege />;
  }
  return content;
}

export default EditSDPage;
