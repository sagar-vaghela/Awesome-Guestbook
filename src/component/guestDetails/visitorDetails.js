import React, { useState } from 'react';
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
  Checkbox
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeSelectedRows } from '../../redux/action';

const columns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'email', label: 'Email' },
  { id: 'department', label: 'Department' }
];

const VisitorDetailsTable = (props) => {
  const { guestData, setGuestData } = props;

  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  const handleRemoveButtonClick = () => {
    if (selected.length === 0) {
      return;
    }
    const idsToRemove = selected;
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = storedData.filter((row) => !idsToRemove.includes(row.firstName));
    localStorage.setItem('formData', JSON.stringify(updatedData));

    const updatedRows = guestData.filter((row) => !idsToRemove.includes(row.firstName));
    setSelected([]);
    setGuestData(updatedRows);
    dispatch(removeSelectedRows(idsToRemove));
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    const NOCHECK_ITEM = -1;
    if (selectedIndex === NOCHECK_ITEM) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = guestData.map((n) => n.firstName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < guestData.length}
                  checked={guestData.length > 0 && selected.length === guestData.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ color: 'black' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {guestData.map((row) => {
              const isItemSelected = isSelected(row.firstName);
              return (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox
                      checked={isItemSelected}
                      onClick={(event) => handleClick(event, row.firstName)}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={column.id} sx={{ color: 'black' }}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default VisitorDetailsTable;
