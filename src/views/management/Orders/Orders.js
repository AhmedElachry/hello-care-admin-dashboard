import DynamicTable from "../DynamicTable";
import Loading from "../Loading";
import Error from "../Error";
import { useGetOrdersQuery } from "../../../app/api/ordersApiSlice";

function Orders() {
  const { data: data, isSuccess, isLoading, isError } = useGetOrdersQuery();
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
          tableCaption={"Orders"}
          editRoute={""}
        />
      </div>
    );
  }
  return content;
}

export default Orders;
