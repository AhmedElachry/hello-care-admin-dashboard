import React, { Suspense, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CContainer, CHeader } from "@coreui/react";
import {
  useUpdateJobTitleMutation,
  useGetJobTitlesQuery,
} from "../../../../../app/api/dataApiSlice";
import JobTitleForm from "./JobTitleForm";
import NotFoundMessage from "./NotFoundMessege";
import Loading from "../Loading";
import Error from "../Error";

function EditJobTitlePage() {
  const [updateJobTitle] = useUpdateJobTitleMutation();
  const {
    data: jobTitles,
    isLoading,
    isSuccess,
    isError,
  } = useGetJobTitlesQuery();

  const [name, setName] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [departmentId, setDepartmentId] = useState(0);
  const [departmentName, setDepartmentName] = useState("");

  const navigate = useNavigate();

  const { jobTitleId } = useParams();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameEnChange = (e) => {
    setNameEn(e.target.value);
  };

  const handleNameArChange = (e) => {
    setNameAr(e.target.value);
  };

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(parseInt(e.target.value));
  };

  const handleDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  let selectedJobTitleToUpdate;
  if (isSuccess) {
    selectedJobTitleToUpdate = jobTitles.data.find(
      (jobTitle) => jobTitle.id == jobTitleId
    );
  }

  useEffect(() => {
    if (isSuccess && selectedJobTitleToUpdate) {
      const {
        name: name,
        name_en: nameEn,
        name_ar: nameAr,
        department_id: departmentId,
        department_name: departmentName,
      } = selectedJobTitleToUpdate;
      setName(name);
      setNameEn(nameEn);
      setNameAr(nameAr);
      setDepartmentId(departmentId);
      setDepartmentName(departmentName);
    }
  }, [isSuccess, selectedJobTitleToUpdate]);

  const isFormValid = [
    name,
    nameEn,
    nameAr,
    departmentId,
    departmentName,
  ].every(Boolean);

  const handleUpdateJobTitle = () => {
    if (isFormValid) {
      const updatedJobTitle = {
        id: jobTitleId,
        name: name,
        name_en: nameEn,
        name_ar: nameAr,
        department_id: departmentId,
        department_name: departmentName,
      };
      updateJobTitle(updatedJobTitle)
        .unwrap()
        .then(() => {
          setName("");
          setNameEn("");
          setNameAr("");
          setDepartmentId(0);
          setDepartmentName("");
          navigate("/management/manage-job-titles");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess) {
    if (!selectedJobTitleToUpdate) {
      content = <NotFoundMessage />;
    } else if (selectedJobTitleToUpdate) {
      content = (
        <div className="card mb-5 p-4">
          <CContainer>
            <CHeader style={{ fontSize: "2rem" }}>Edit This Job Title </CHeader>
            <JobTitleForm
              name={name}
              nameEn={nameEn}
              nameAr={nameAr}
              departmentId={departmentId}
              departmentName={departmentName}
              isFormValid={isFormValid}
              handleNameChange={handleNameChange}
              handleNameEnChange={handleNameEnChange}
              handleNameArChange={handleNameArChange}
              handleDepartmentIdChange={handleDepartmentIdChange}
              handleDepartmentNameChange={handleDepartmentNameChange}
              handleUpdateJobTitle={handleUpdateJobTitle}
            />
          </CContainer>
        </div>
      );
    }
  }

  return <>{content}</>;
}

export default EditJobTitlePage;
