import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { useDeleteJobTitleMutation } from "../../../../../app/api/dataApiSlice";
import { useNavigate } from "react-router-dom";

function TableActions({ jobTitle }) {
  const navigate = useNavigate();
  const [deleteJobTitle] = useDeleteJobTitleMutation();

  const handleDeleteJobTitle = (jobId) => {
    deleteJobTitle(jobId);
  };

  return (
    <div className="d-flex justify-content-around">
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilPen}
        title="edit this job title"
        size="lg"
        onClick={() => navigate(`/management/edit-job-title/${jobTitle.id}`)}
      />
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilTrash}
        title="delete this job title"
        size="lg"
        onClick={() => handleDeleteJobTitle({ id: jobTitle.id })}
      />
    </div>
  );
}

export default TableActions;
