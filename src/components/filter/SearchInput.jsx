import { Input, OutlinedInput } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterValues } from "../../features/jobs/jobSlice";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = (props) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  useEffect(() => {
    dispatch(setFilterValues({ [props.name]: debouncedValue }));
  }, [debouncedValue, dispatch, props.name]);
  return (
    <div>
      <OutlinedInput {...props} value={value} onChange={handleChange} />
    </div>
  );
};

export default SearchInput;
