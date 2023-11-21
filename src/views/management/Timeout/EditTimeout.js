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
  useGetTimeoutsQuery,
  useUpdateTimeoutMutation,
} from "../../../app/api/timeOutApiSlice";
function EditTimeout() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: timeouts,
    isSuccess,
    isLoading,
    isError,
  } = useGetTimeoutsQuery();
  const [updateTimeout] = useUpdateTimeoutMutation();

  let selectedTimeoutToUpdate;
  if (isSuccess) {
    const dataArr = timeouts.data.slice();
    selectedTimeoutToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedTimeoutToUpdate) {
      setValue(selectedTimeoutToUpdate.value);
    }
  }, [isSuccess, selectedTimeoutToUpdate]);

  const isFormValid = Boolean(value);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  let updatedValue = {
    id,
    value,
  };
  const handleUpdateTimeout = () => {
    console.log(updatedValue);
    updateTimeout(updatedValue)
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
        navigate("/management/timeouts");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.data.message, {
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

  if (isLoading) {
    content = <Loading />;
  } else if (!selectedTimeoutToUpdate) {
    content = <NotFoundMessege />;
  } else if (isSuccess && selectedTimeoutToUpdate) {
    content = (
      <div>
        <CForm onSubmit={(e) => e.preventDefault()}>
          <CRow>
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Value:</CFormLabel>
              <CFormInput
                type="text"
                value={value}
                onChange={handleValueChange}
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
                onClick={handleUpdateTimeout}
                disabled={!isFormValid}
              >
                Edit Done
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </div>
    );
  } else if (isError) {
    content = <Error />;
  }
  return content;
}

export default EditTimeout;
