import { CSpinner, CContainer } from "@coreui/react";
import { Suspense } from "react";
function Loading() {
  return (
    <CContainer>
      <Suspense fallback={<CSpinner color="primary" />}></Suspense>
    </CContainer>
  );
}
export default Loading;
