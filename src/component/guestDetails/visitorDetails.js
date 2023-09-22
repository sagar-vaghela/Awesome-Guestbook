import React from 'react';
import { Button } from "@mui/material";
const VisitorDetailsTable = () => {
  const guestData = JSON.parse(localStorage.getItem('formData')) || [];

  const handleRemove = () => {
    //
  }

  return (
    <>
      <Button variant="contained" color={'error'} onClick={handleRemove}>
        Remove
      </Button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {guestData &&
            guestData?.map((guest, index) => (
              <tr key={index}>
                <td>{guest.firstName}</td>
                <td>{guest.email}</td>
                <td>{guest.department}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default VisitorDetailsTable;
