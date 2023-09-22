import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/action";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  // useTheme
} from "@mui/material";

const departmentInfo = [
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "it",
    label: "IT",
  },
  {
    value: "sales",
    label: "Sales",
  },
  {
    value: "management",
    label: "Management",
  },
];

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    department: "",
  });
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(false);
  const dispatch = useDispatch();
  // const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setSaveToLocalStorage(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFormData(formData));

    if (saveToLocalStorage) {
      const savedData = JSON.parse(localStorage.getItem("formData")) || [];
      savedData.push(formData);
      localStorage.setItem("formData", JSON.stringify(savedData));
    }
  };

  const handleReset = () => {
    // Clear all form fields and reset the checkbox
    setFormData({
      firstName: "",
      department: "",
      email: "",
    });
    setSaveToLocalStorage(false);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="h6">Add new visitor</Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Full name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Email Address *"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <FormControl fullWidth>
        <InputLabel id="department-select-label">Age</InputLabel>
        <Select
          id="department-select"
          labelId="department-select-label"
          name="department"
          label="Age"
          value={formData.department}
          onChange={handleChange}
        >
          {departmentInfo.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        <FormControlLabel
          name="saveToLocalStorage"
          checked={saveToLocalStorage}
          onChange={handleCheckboxChange}
          control={<Checkbox />}
          label="I agree to be added to the table"
        />
      </Box>

      <Box display={"flex"} gap={3}>
        <Button variant="outlined" color={"error"} onClick={handleReset}>
          Reset
        </Button>
        <Button variant="contained" color={"error"} onClick={handleSubmit}>
          Add new visitor
        </Button>
      </Box>
    </Box>
  );
};

export default VisitorForm;
