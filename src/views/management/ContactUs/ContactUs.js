import DynamicTable from "../DynamicTable";
import Loading from "../Loading";
import Error from "../Error";
import { useGetContactUsQuery } from "../../../app/api/contactUSApiSlice";
function ContactUs() {
  const { data: data, isSuccess, isLoading, isError } = useGetContactUsQuery();
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
          mutable={false}
          removable={false}
          tableCaption={"Contact Us"}
          editRoute={""}
        />
      </div>
    );
  }
  return content;
}

export default ContactUs;
