import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/jobs/jobSlice";
import { Container, Grid } from "@mui/material";
import JobItem from "./JobItem";

const JobListing = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error, jobSize } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs({ limit: jobSize, offset: 0 }));
  }, []);

  if (!loading && !error)
    return (
      <Container>
        <Grid container spacing={3}>
          {jobs.map((jobData) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={jobData.jdUid}>
              <JobItem {...jobData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
};

export default JobListing;
