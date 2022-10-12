import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Field = ({ label, options }) => {
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select>
          <MenuItem>Option 1</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Field;
