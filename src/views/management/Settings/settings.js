import DynamicTable from "../DynamicTable";
import Loading from "../Loading";
import Error from "../Error";
import { useGetSettingsQuery } from "../../../app/api/settingsApiSlice";
function settings() {
  const { data: data, isSuccess, isLoading, isError } = useGetSettingsQuery();
  let content;
  let tableData = [];
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  }
  if (isSuccess) {
    tableData = data.data;
    content = (
      <div>
        <DynamicTable
          tableData={tableData}
          mutable={true}
          removable={false}
          tableCaption={"Settings"}
          editRoute={""}
        />
      </div>
    );
  }
  return content;
}

export default settings;
