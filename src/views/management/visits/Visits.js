import React from "react";
import DynamicTable from "../DynamicTable";
import { useGetVisitsQuery } from "../../../app/api/VisitsApiSlice";

function Visits() {
  const { data: data, isSuccess, isLoading } = useGetVisitsQuery();
  let content;
  let tableData = [];
  if (isLoading) {
    content = <>Loading.......................</>;
  }
  if (isSuccess) {
    tableData = data.data;
    content = (
      <div>
        <DynamicTable
          tableData={tableData}
          mutable={true}
          tableCaption={"our Avialable visits"}
        />
      </div>
    );
  }
  return <>{content}</>;
}

export default Visits;
