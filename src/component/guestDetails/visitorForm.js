import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/action";
const VisitorForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    department: ""
  });
  const [saveToLocalStorage, setSaveToLocalStorage] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
      email: ""
    });
    setSaveToLocalStorage(false);
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Select Department">
        <option value="">Select Department</option>
        <option value="marketing">Marketing</option>
        <option value="it">IT</option>
        <option value="sales">Sales</option>
        <option value="management">Management</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="saveToLocalStorage"
          checked={saveToLocalStorage}
          onChange={handleCheckboxChange}
        />
        I agree to be added to the table
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default VisitorForm;
