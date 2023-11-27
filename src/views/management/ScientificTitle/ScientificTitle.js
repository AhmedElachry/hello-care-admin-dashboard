import React, { useState } from "react";
import DynamicTable from "../DynamicTable";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CButton,
  CCollapse,
} from "@coreui/react";
import { toast } from "react-hot-toast";

import Loading from "../Loading";
import Error from "../Error";

import {
  useGetScientificTitlesQuery,
  useAddScientificTitleMutation,
  useDeleteScientificTitleMutation,
} from "../../../app/api/scientificTitleApiSlice";

function ScientificTitle() {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const {
    data: data,
    isSuccess,
    isError,
    isLoading,
  } = useGetScientificTitlesQuery();
  const [deleteScientificTitle] = useDeleteScientificTitleMutation();
  const [addST] = useAddScientificTitleMutation();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    let newST = {
      name,
    };

    toast.promise(addST(newST).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        console.log(data);
        setVisible(!visible);
        setName("");
        return `${data.message}`;
      },

      error: (error) => {
        console.log(error);
        return `${error.data.message}`;
      },
    });
  };
  const isFormValid = Boolean(name);

  let tableData = [];
  let content;

  if (isLoading) {
    content = <Loading />;
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
          removable={true}
          deleteItemHook={deleteScientificTitle}
          editRoute={"edit-scientific-title"}
          tableCaption={"ScientificTitles"}
        />
      </div>
    );
  } else if (isError) {
    content = <Error />;
  }
  return content;
}

export default ScientificTitle;
