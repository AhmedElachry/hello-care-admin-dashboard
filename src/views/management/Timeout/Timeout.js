import React from "react";
import DynamicTable from "../DynamicTable";
import { useGetTimeoutsQuery } from "../../../app/api/timeOutApiSlice";
import Loading from "../Loading";
import Error from "../Error";

function Timeout() {
  const { data: data, isSuccess, isLoading, isError } = useGetTimeoutsQuery();

  let content;
  let tableData = [];

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess) {
    tableData = data.data;
    content = (
      <div>
        <DynamicTable
          tableData={tableData}
          mutable={true}
          removable={false}
          tableCaption={"Timeouts"}
          editRoute={"edit-timeout"}
        />
      </div>
    );
  }
  return content;
}

export default Timeout;
