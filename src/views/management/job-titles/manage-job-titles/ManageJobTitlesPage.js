// import JobTitleTable from "./job-titles-table/JobTitlesTable";
// import Error from "./Error";
// import JobTitlesForm from "./job-titles-form/JobTitlesForm";
// import Loading from "./Loading";
// import { useGetJobTitlesQuery } from "../../../../app/api/dataApiSlice";

// function ManageJobTitles() {
//   const {
//     data: jobTitles,
//     isLoading,
//     isSuccess,
//     isError,
//   } = useGetJobTitlesQuery();

//   let jobTitlesData;
//   if (isSuccess) {
//     jobTitlesData = jobTitles.data.slice();
//   }

//   let content;
//   if (isLoading) {
//     content = <Loading />;
//   } else if (isSuccess) {
//     content = (
//       <>
//         <JobTitlesForm />
//         <JobTitleTable jobTitlesData={jobTitlesData} />
//       </>
//     );
//   } else if (isError) {
//     content = <Error />;
//   }

//   return <>{content}</>;
// }
// export default ManageJobTitles;
