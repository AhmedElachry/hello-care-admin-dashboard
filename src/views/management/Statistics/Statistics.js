import DynamicTable from "../DynamicTable";
import Loading from "../Loading";
import Error from "../Error";
import { useGetstatisticsQuery } from "../../../app/api/statisticsApiSlice";
function ContactUs() {
  const { data: data, isSuccess, isLoading, isError } = useGetstatisticsQuery();
  let content;
  let tableData = [];
  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <Error />;
  } else if (isSuccess) {
    tableData = data.data;
    console.log(tableData);
    content = (
      <>
        <div>
          <DynamicTable
            tableData={tableData.orders}
            mutable={false}
            removable={false}
            tableCaption={"Statistics"}
            editRoute={""}
          />
        </div>
        <div>
          <DynamicTable
            tableData={tableData.visits}
            mutable={false}
            removable={false}
            tableCaption={"Statistics"}
            editRoute={""}
          />
        </div>
      </>
    );
  }
  return content;
}

export default ContactUs;
