import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setFilterValues } from "../../features/jobs/jobSlice";

const FilterSelect = ({ id, title, menuItemData, name }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValue(value);
    dispatch(setFilterValues({ [name]: value }));
  };
  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{title}</InputLabel>
      <Select
        labelId={id}
        id="demo-simple-select"
        value={value}
        label={title}
        onChange={handleChange}
        name={name}
      >
        {menuItemData.map((data) => (
          <MenuItem
            key={data}
            value={data}
            sx={{ textTransform: "capitalize", fontSize: "16px" }}
          >
            {data}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
