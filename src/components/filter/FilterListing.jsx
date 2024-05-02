import {
  Box,
  Chip,
  Container,
  FilledInput,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import FilterSelect from "./FilterSelect";
import SearchInput from "./SearchInput";
import FilterMultipleSelect from "./FilterMultipleSelect";

const FilterListing = () => {
  const { jobRoles, experience, minSalary } = useSelector(
    (state) => state.jobs
  );

  return (
    <Box
      sx={{
        padding: "20px 0",
        position: "sticky",
        top: "0",
        background: "white",
        zIndex: "10",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FilterMultipleSelect
            menuItemData={jobRoles}
            title={"Job Role"}
            id={"jobrole"}
            name={"selectedJobRole"}
          />
          <FilterSelect
            menuItemData={experience}
            title={"Experience"}
            id={"experience"}
            name="experience"
          />
          <FilterSelect
            menuItemData={minSalary}
            title={"Minimum Salary"}
            id={"minsalary"}
            name="minimumSalary"
          />
          <SearchInput
            name="location"
            title={"Location"}
            placeholder={"Search Location"}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FilterListing;
