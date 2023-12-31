import DynamicTable from "../DynamicTable";
import { useGetVisitsQuery } from "../../../app/api/VisitsApiSlice";
import Loading from "../Loading";
import Error from "../Error";

function Visits() {
  const { data: data, isSuccess, isLoading, isError } = useGetVisitsQuery();
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
          tableCaption={"Visits"}
          editRoute={"edit-visit"}
        />
      </div>
    );
  }
  return content;
}

export default Visits;
