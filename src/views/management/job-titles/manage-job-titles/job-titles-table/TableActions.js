import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { useDeleteJobTitleMutation } from "../../../../../app/api/dataApiSlice";
import { useNavigate } from "react-router-dom";

function TableActions({ itemId, route }) {
  const navigate = useNavigate();
  // const [deleteJobTitle] = useDeleteJobTitleMutation();

  const handleDeleteItem = (itemId) => {
    deleteItem(jobId);
  };

  return (
    <div className="d-flex justify-content-around">
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilPen}
        title="edit"
        size="lg"
        onClick={() => navigate(`/management/${route}/${itemId}`)}
      />
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilTrash}
        title="delete"
        size="lg"
        onClick={() => handleDeleteItem({ itemId })}
      />
    </div>
  );
}

export default TableActions;
