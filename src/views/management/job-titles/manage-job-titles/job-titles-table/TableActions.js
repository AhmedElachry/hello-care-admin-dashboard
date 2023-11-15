import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import { useNavigate } from "react-router-dom";

function TableActions({ id, editRoute, deleteItemHook }) {
  const navigate = useNavigate();

  const handleDeleteItem = (id) => {
    deleteItemHook(id);
  };
  return (
    <div className="d-flex justify-content-around">
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilPen}
        title="edit"
        size="lg"
        onClick={() => navigate(`/management/${editRoute}/${id}`)}
      />
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilTrash}
        title="delete"
        size="lg"
        onClick={() => handleDeleteItem({ id })}
      />
    </div>
  );
}

export default TableActions;
