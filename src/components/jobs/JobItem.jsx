import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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

  const handleShowReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: "12px" }}>
      <CardContent>
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
            Estimated Salary: {minSalary}-{maxSalary}
          </Typography>
        </Box>

        <Box className="job-description" sx={{ marginTop: "20px" }}>
          <Typography sx={{ fontWeight: "bold" }}>About Role</Typography>
          <Typography sx={{ fontSize: "16px" }}>
            {isReadMore ? JobDescription : JobDescription.substr(0, 200)}...
            <Button
              variant="text"
              sx={{ textTransform: "capitalize", color: "#4843db" }}
              onClick={handleShowReadMore}
            >
              Read More
            </Button>
          </Typography>

          <Typography
            sx={{ marginTop: "20px", fontSize: "16px", color: "gray" }}
          >
            Minimum Experience
          </Typography>
          <Typography>{minExp}</Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Box>
          <Button
            variant="contained"
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
  );
};

export default JobItem;
