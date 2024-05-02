import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

import { fetchJobs } from "../../features/jobs/jobSlice";
import JobItem from "./JobItem";
import Loader from "../ui/Loader";

const JobListing = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error, pageSize, currentPage, totalCount } =
    useSelector((state) => state.jobs);

  // to check if its in viewport
  const { ref, inView } = useInView();

  useEffect(() => {
    if (
      (currentPage === 0 || inView) &&
      !loading &&
      (jobs.length < totalCount || totalCount === 0)
    ) {
      dispatch(fetchJobs({ limit: pageSize, offset: pageSize * currentPage }));
    }
  }, [inView]);

  if (loading && currentPage === 0) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {jobs.map((jobData) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={jobData.jdUid}>
            <JobItem {...jobData} />
          </Grid>
        ))}
        <div
          ref={ref}
          style={{
            margin: "50px 0",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {loading && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
      </Grid>
    </Container>
  );
};

export default JobListing;
