/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Checkbox,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeSelectedRows } from '../../redux/action';

const VisitorDetailsTable = ({ guestData, setGuestData }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    { id: 'firstName', label: 'First Name' },
    { id: 'email', label: 'Email' },
    { id: 'department', label: 'Department' },
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    const allChecked = guestData.length > 0 && selectedRows.length === guestData.length;
    setSelectAll(allChecked);
  }, [selectedRows, guestData]);

  const handleHeaderCheckboxChange = () => {
    setSelectAll(!selectAll);
    const updatedRows = selectAll ? [] : guestData.map((row) => row.id);
    setSelectedRows(updatedRows);
  };

  const handleCheckboxChange = (id) => {
    const isChecked = selectedRows.includes(id);
    let updatedRows;

    if (isChecked) {
      updatedRows = selectedRows.filter((rowId) => rowId !== id);
    } else {
      updatedRows = [...selectedRows, id];
    }

    setSelectedRows(updatedRows);
    setSelectAll(false);
  };

  const handleRemoveButtonClick = () => {
    const idsToRemove = selectedRows;
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = storedData.filter((row) => !idsToRemove.includes(row.id));
    localStorage.setItem('formData', JSON.stringify(updatedData));

    const updatedRows = guestData.filter((row) => !idsToRemove.includes(row.id));
    setSelectedRows([]);
    setSelectAll(false);
    setGuestData(updatedRows);
    dispatch(removeSelectedRows(idsToRemove));
  };

  return (
    <>
      <h1 style={{ fontWeight: 400 }}>Visitor management</h1>
      <Box sx={{ pb: 2 }}>
        <Button variant="contained" onClick={handleRemoveButtonClick}>
          Remove
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ background: 'white', color: 'black' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox checked={selectAll} onChange={handleHeaderCheckboxChange} />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ color: 'black' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {guestData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={column.id} sx={{ color: 'black' }}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VisitorDetailsTable;
