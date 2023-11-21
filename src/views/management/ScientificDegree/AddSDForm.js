import { useState } from "react";
import { toast } from "react-toastify";

import {
  useGetScientificDegreesQuery,
  useAddScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
} from "@coreui/react";
import Loading from "../Loading";

function SDForm() {
  const [name, setName] = useState("");
  const {
    data: SDegrees,
    isSuccess,
    isLoading,
    isError,
  } = useGetScientificDegreesQuery();
  const [addSDegree] = useAddScientificDegreeMutation();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    let newSD = { name };
    addSDegree(newSD)
      .unwrap()
      .then((payload) => {
        setName("");
        toast.success(payload.message, {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("rejected", error);
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

  let tableData = [];

  if (isSuccess) {
    tableData = SDegrees.data.slice();
  }

  const isFormValid = Boolean(name);

  let content;
  if (isLoading) {
    content = <Loading />;
  }

  return (
    <div>
      <CForm onSubmit={(e) => e.preventDefault()}>
        <CRow>
          <CCol xs="12" sm="4">
            <CFormLabel style={{ fontSize: "1.4rem" }}>Name:</CFormLabel>
            <CFormInput
              type="text"
              name="name"
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
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Done
            </CButton>
          </CCol>
        </CRow>
      </CForm>
    </div>
  );
}

export default SDForm;
