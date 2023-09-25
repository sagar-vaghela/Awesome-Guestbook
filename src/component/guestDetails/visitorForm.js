import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../redux/action';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import VisitorDetailsTable from './visitorDetails';

const departmentInfo = [
  {
    value: 'marketing',
    label: 'Marketing'
  },
  {
    value: 'it',
    label: 'IT'
  },
  {
    value: 'sales',
    label: 'Sales'
  },
  {
    value: 'management',
    label: 'Management'
  }
];

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    department: ''
  });
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const [guestData, setGuestData] = useState([]);

  const updateGuestDataFromLocalStorage = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('formData')) || [];
    setGuestData(dataFromLocalStorage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    updateGuestDataFromLocalStorage();
  }, []);

  const handleCheckboxChange = (e) => {
    setSaveToLocalStorage(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveFormData(formData));

    if (saveToLocalStorage) {
      const savedData = JSON.parse(localStorage.getItem('formData')) || [];
      savedData.push(formData);
      localStorage.setItem('formData', JSON.stringify(savedData));
      updateGuestDataFromLocalStorage();
    }
  };

  const handleReset = () => {
    // Clear all form fields and reset the checkbox
    setFormData({
      firstName: '',
      department: '',
      email: ''
    });
    setSaveToLocalStorage(false);
  };

  console.log('theme', theme);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={3} md={5} sm={12} xs={12}>
          <Box display={'flex'} flexDirection={'column'} gap={3}>
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
                sx={{
                  '& .MuiSelect-icon': {
                    fill: '#000 '
                  }
                }}>
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

            <Box display={'flex'} gap={3}>
              <Button
                variant="outlined"
                onClick={handleReset}
                sx={{
                  width: '40%'
                }}>
                Reset Form
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  width: '60%'
                }}>
                Add new visitor
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item lg={9} md={7} sm={12} xs={12}>
          <VisitorDetailsTable guestData={guestData} />
        </Grid>
      </Grid>
    </>
  );
};

export default VisitorForm;
