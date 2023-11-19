import { cilPen, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function TableActions({ id, editRoute, deleteItemHook }) {
  const navigate = useNavigate();

  const handleDeleteItem = (id) => {
    deleteItemHook(id)
      .unwrap()
      .then((payload) => {
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
  return (
    <div className="d-flex justify-content-between ">
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
