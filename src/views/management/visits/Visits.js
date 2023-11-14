import React from "react";
import DynamicTable from "../DynamicTable";
import { useGetVisitsQuery } from "../../../app/api/VisitsApiSlice";

function Visits() {
  const { data: data, isSuccess } = useGetVisitsQuery();
  let tableData = [];
  if (isSuccess) {
    tableData = data.data;
  }
  return (
    <div>
      <DynamicTable
        tableData={tableData}
        mutable={true}
        tableCaption={"our Avialable visits"}
      />
    </div>
  );
}

export default Visits;
