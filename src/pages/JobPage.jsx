import React from "react";

import JobListing from "../components/jobs/JobListing";
import FilterListing from "../components/filter/FilterListing";

const JobPage = () => {
  return (
    <>
      <FilterListing />
      <JobListing />;
    </>
  );
};

export default JobPage;
