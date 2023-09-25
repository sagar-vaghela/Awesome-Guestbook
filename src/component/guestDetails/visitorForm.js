import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/action";
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
  // useTheme
} from "@mui/material";
import VisitorDetailsTable from "./visitorDetails";

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
  const [guestData, setGuestData] = useState([]);

  const updateGuestDataFromLocalStorage = () => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("formData")) || [];
    setGuestData(dataFromLocalStorage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    updateGuestDataFromLocalStorage();
  }, [])
  

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
      updateGuestDataFromLocalStorage();
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

  return (<>
  <Grid container spacing={2}>
  <Grid item lg={3} md={6} sm={12} xs={12}>
  <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="h6">Add new visitor</Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="Full name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        sx={{ 
          '& .MuiOutlinedInput-root':{
          border:'1px solid #000',
          color:'#000'
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #000',
        },
        '& .MuiInputLabel-formControl':{
          color:'#000'
        }
      }}

      />

      <TextField
        fullWidth
        variant="outlined"
        label="Email Address *"
        name="email"
        value={formData.email}
        onChange={handleChange}
        sx={{ 
          '& .MuiOutlinedInput-root':{
          border:'1px solid #000',
          color:'#000'
        },
        '& .Mui-focused ': {
          border: '1px solid #000 !important',
        },
        '& .MuiInputLabel-formControl':{
          color:'#000'
        }
      }}

      />

      <FormControl fullWidth>
        <InputLabel id="department-select-label" >Age</InputLabel>
        <Select
          id="department-select"
          labelId="department-select-label"
          name="department"
          label="Age"
          value={formData.department}
          onChange={handleChange}
          sx={{
        
            '& .MuiOutlinedInput-root:hover':{
              border:'1px solid #000',
            },
            '& .MuiSelect-select':{
              border:'1px solid #000',
              color:'#000'
            },
            '& .MuiSelect-select:hover':{
              border:'1px solid #000',
              color:'#000'
            },
            '& .MuiSelect-icon':{
              fill:'#000 '
            }
           

          }}
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
          control={<Checkbox sx={{
            '& .MuiSvgIcon-root':{
              fill:'black'
            }
          }}/>}
          label="I agree to be added to the table"
        />
      </Box>

      <Box display={"flex"} gap={3}>
        <Button variant="outlined" color={"error"} onClick={handleReset} sx={{
          width:'40%'
        }}>
          Reset Form
        </Button>
        <Button variant="contained" color={"error"} onClick={handleSubmit} sx={{
          width:'60%'
        }}>
          Add new visitor
        </Button>
      </Box>
    </Box>
  </Grid>

  <Grid item lg={9} md={6} sm={12} xs={12}>

    <VisitorDetailsTable guestData={guestData} />
  </Grid>
 
</Grid>

  
 </>);
};

export default VisitorForm;
