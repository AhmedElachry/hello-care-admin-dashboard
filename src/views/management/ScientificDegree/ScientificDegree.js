import { useState } from "react";

import {
  CButton,
  CCollapse,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
} from "@coreui/react";

import {
  useGetScientificDegreesQuery,
  useDeleteScientificDegreeMutation,
  useAddScientificDegreeMutation,
} from "../../../app/api/ScientificDegreeApiSlice";

import DynamicTable from "../DynamicTable";
import Loading from "../Loading";
import Error from "../Error";

import toast from "react-hot-toast";

function ScientificDegree() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const {
    data: data,
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
    toast.promise(addSDegree(newSD).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        setVisible(!visible);
        setName("");
        return `${data.message}`;
      },

      error: (error) => {
        return `${error.data.message}`;
      },
    });
  };
  let isFormValid = Boolean(name);

  const [deleteScientificDegree] = useDeleteScientificDegreeMutation();

  let tableData = [];
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
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
        </CCollapse>

        <DynamicTable
          tableData={tableData}
          mutable={true}
          editRoute={"edit-scientific-degree"}
          deleteItemHook={deleteScientificDegree}
          tableCaption={"ScientificDegree"}
          removable={true}
        />
      </div>
    );
  }
  return content;
}

export default ScientificDegree;
