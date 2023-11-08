import React from "react";
import { useNavigate } from "react-router-dom";
import { CButton, CContainer } from "@coreui/react";

function LoginAdmin() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-light min-vh-100 min-vw-100 d-flex flex-row align-items-center "
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/perspective-exterior-nobody-empty-box_1258-260.jpg?w=1380&t=st=1689210245~exp=1689210845~hmac=341134be4b4b0cb94259767defd77a215d31c50421a78a8d2f4599c3d4aace10)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <CContainer>
        <p className="h2 text-primary">Welcome To Apps Square Dashboard</p>
        <CButton
          color="primary"
          className="px-4"
          style={{ fontSize: "1.5rem", marginTop: "3rem" }}
          onClick={() => navigate("/login", { replace: "true" })}
        >
          Login As Adminstrator
        </CButton>
      </CContainer>
    </div>
  );
}

export default LoginAdmin;
