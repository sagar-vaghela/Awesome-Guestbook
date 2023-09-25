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
  Box
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeSelectedRows } from '../../redux/action';

const VisitorDetailsTable = (guestData) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    { id: 'firstName', label: 'First Name' },
    { id: 'email', label: 'Email' },
    { id: 'department', label: 'Department' }
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    const allChecked = selectedRows.every((row) => row.checked);
    console.log('allChecked', allChecked);
    setSelectAll(allChecked);
  }, []);

  const handleRemoveButtonClick = () => {
    const idsToRemove = selectedRows.filter((row) => row.checked).map((row) => row.id);
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = storedData.filter((row) => !idsToRemove.includes(row.id));
    localStorage.setItem('formData', JSON.stringify(updatedData));

    const updatedRows = selectedRows.filter((row) => !idsToRemove.includes(row.id));
    setSelectedRows(updatedRows);

    dispatch(removeSelectedRows(idsToRemove));
  };

  console.log('guestData', guestData);
  console.log('selectAll', selectAll);
  
  return (
    <>
      <h1 style={{ fontWeight: 400 }}>Visitor management</h1>
      <Box sx={{ pb: 2 }}>
        <Button variant="contained" onClick={handleRemoveButtonClick}>
          Remove
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          background: 'white',
          color: 'black'
        }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ color: 'black' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {guestData.guestData?.map((row) => (
              <TableRow key={row.id}>
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
