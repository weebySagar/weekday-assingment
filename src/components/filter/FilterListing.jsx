import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const filterContent = (
    <Grid container spacing={2} sx={{ padding: { xs: "20px 0", lg: "0" } }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FilterMultipleSelect
          menuItemData={jobRoles}
          title={"Job Role"}
          id={"jobrole"}
          name={"selectedJobRole"}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FilterSelect
          menuItemData={experience}
          title={"Experience"}
          id={"experience"}
          name="experience"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FilterSelect
          menuItemData={minSalary}
          title={"Minimum Salary"}
          id={"minsalary"}
          name="minimumSalary"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <SearchInput
          name="location"
          title={"Location"}
          placeholder={"Search Location"}
        />
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar color="default" sx={{ padding: "10px 0" }}>
        <Container>
          <Toolbar sx={{ display: { lg: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <i className="fa-solid fa-bars"></i>
            </IconButton>
          </Toolbar>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {filterContent}
          </Box>
        </Container>
      </AppBar>
      <Drawer anchor="top" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Container>{filterContent}</Container>
      </Drawer>
    </Box>
  );
};

export default FilterListing;
