import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function TableActions({ id, editRoute, deleteItemHook, removable }) {
  const navigate = useNavigate();

  const handleDeleteItem = (id) => {
    toast.promise(deleteItemHook(id).unwrap(), {
      loading: "Pending ...",
      success: (data) => {
        return `${data.message}`;
      },

      error: (error) => {
        return `${error.data.message}`;
      },
    });
  };
  return (
    <div className="d-flex justify-content-between ">
      <CIcon
        style={{ cursor: "pointer" }}
        icon={cilPen}
        title="edit"
        size="lg"
        onClick={() => navigate(`/management/${editRoute}/${id}`)}
      />
      {removable && (
        <CIcon
          style={{ cursor: "pointer" }}
          icon={cilTrash}
          title="delete"
          size="lg"
          onClick={() => handleDeleteItem({ id })}
        />
      )}
    </div>
  );
}

export default TableActions;
