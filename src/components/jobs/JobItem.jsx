import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Modal from "../ui/Modal";

// This is card component for job
const JobItem = ({
  location,
  jobRole,
  jobDetailsFromCompany: JobDescription,
  jdLink: jobLink,
  minExp,
  minJdSalary: minSalary,
  maxJdSalary: maxSalary,
}) => {
  // to show to job description content more or less
  const [isReadMore, setIsReadMore] = useState(false);

  // open modal for job description
  const handleOpenModal = () => {
    setIsReadMore(true);
  };

  // close modal for job description
  const handleCloseModal = () => {
    setIsReadMore(false);
  };
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardContent sx={{ flexGrow: "1" }}>
          <Box className="job-details">
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textTransform: "capitalize",
              }}
            >
              {jobRole}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: "600",
              }}
            >
              {location}
            </Typography>
          </Box>

          <Box className="salary" sx={{ marginTop: "10px" }}>
            <Typography sx={{ color: "gray" }}>
              {!minSalary
                ? `Estimated Salary: ${maxSalary} USD
`
                : `Estimated Salary: ${minSalary} - ${maxSalary} USD`}
            </Typography>
          </Box>

          <Box className="job-description" sx={{ marginTop: "20px" }}>
            <Typography sx={{ fontWeight: "bold" }}>About Role</Typography>
            <Typography sx={{ fontSize: "16px" }}>
              {JobDescription.substr(0, 200)}...
              <Button
                variant="text"
                sx={{ textTransform: "capitalize", color: "#4843db" }}
                onClick={handleOpenModal}
              >
                Read More
              </Button>
            </Typography>

            {minExp && (
              <>
                <Typography
                  sx={{ marginTop: "20px", fontSize: "16px", color: "gray" }}
                >
                  Minimum Experience
                </Typography>
                <Typography>{minExp} years</Typography>
              </>
            )}
          </Box>
        </CardContent>

        <CardActions>
          <Box sx={{ width: "100%" }}>
            <Button
              variant="contained"
              LinkComponent={"a"}
              href={jobLink}
              target="_blank"
              startIcon={
                <i
                  class="fa-solid fa-bolt-lightning"
                  style={{ color: "#ffd341" }}
                ></i>
              }
              sx={{
                background: "#55eec3",
                color: "black",
                textTransform: "capitalize",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              Easy Apply
            </Button>

            <Button
              variant="contained"
              sx={{
                background: "#4843db",
                textTransform: "capitalize",
                width: "100%",
                marginTop: "10px",
              }}
            >
              Unlock referral asks
            </Button>
          </Box>
        </CardActions>
      </Card>
      <Modal
        isOpen={isReadMore}
        title={"Job Description"}
        content={JobDescription}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default JobItem;
