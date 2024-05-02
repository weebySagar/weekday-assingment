import {
  MenuItem,
  Box,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setFilterValues, setJobValues } from "../../features/jobs/jobSlice";

const FilterMultipleSelect = ({ name, id, title, menuItemData }) => {
  const [selectedData, setSelectedData] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedData(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    dispatch(setFilterValues({ [name]: value }));
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
      },
    },
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={id}>{title}</InputLabel>
        <Select
          name={name}
          labelId={id}
          id="demo-multiple-name"
          multiple
          value={selectedData}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          MenuProps={MenuProps}
          sx={{ textTransform: "capitalize" }}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {menuItemData.map((data) => (
            <MenuItem
              key={data}
              value={data}
              // style={getStyles(name, personName, theme)}
              sx={{ textTransform: "capitalize", fontSize: "16px" }}
            >
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterMultipleSelect;
