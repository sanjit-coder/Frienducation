"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function BasicSelect({ selectedValue, handleChange }) {
  const handleChangeValue = (event) => {
    handleChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <InputLabel
        sx={{ color: "#E1EBEE", fontSize: "13px", fontWeight: "500" }}
        id="demo-simple-select-label"
      >
        Event Type
      </InputLabel>
      <FormControl fullWidth>
        <Select
          sx={{
            backgroundColor: "#0080CF",
            color: "#FFFFFF",
            borderRadius: "5px",
            width: "100%",
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Age"
          onChange={handleChangeValue}
        >
          <MenuItem value={"Event 1"}>Event 1</MenuItem>
          <MenuItem value={"Event 2"}>Event 2</MenuItem>
          <MenuItem value={"Event 3"}>Event 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
