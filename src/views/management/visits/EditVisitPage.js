import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

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
  useGetVisitsQuery,
  useUpdateVisitMutation,
} from "../../../app/api/VisitsApiSlice";
function EditVisitPage() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: visits, isSuccess, isLoading, isError } = useGetVisitsQuery();
  const [updateVisit] = useUpdateVisitMutation();

  let selectedVisitToUpdate;
  if (isSuccess) {
    const dataArr = visits.data.slice();
    selectedVisitToUpdate = dataArr.find((item) => item.id == id);
  }
  useEffect(() => {
    if (isSuccess && selectedVisitToUpdate) {
      setMinPrice(selectedVisitToUpdate.min_price);
      setMaxPrice(selectedVisitToUpdate.max_price);
    }
  }, [isSuccess, selectedVisitToUpdate]);

  const isFormValid = [minPrice, maxPrice].every(Boolean);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  let updatedVisit = {
    id,
    min_price: minPrice,
    max_price: maxPrice,
  };
  const handleUpdateST = () => {
    toast.promise(updateVisit(updatedVisit).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        navigate("/management/visits");
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
  } else if (!selectedVisitToUpdate) {
    content = <NotFoundMessege />;
  } else if (isSuccess && selectedVisitToUpdate) {
    content = (
      <div>
        <CForm onSubmit={(e) => e.preventDefault()}>
          <CRow>
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Min Price:</CFormLabel>
              <CFormInput
                type="integer"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </CCol>
            <CCol xs="12" sm="4">
              <CFormLabel style={{ fontSize: "1.4rem" }}>Max Price:</CFormLabel>
              <CFormInput
                type="text"
                value={maxPrice}
                onChange={handleMaxPriceChange}
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
export default EditVisitPage;
